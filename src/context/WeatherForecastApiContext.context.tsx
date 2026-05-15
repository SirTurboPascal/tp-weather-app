import { eq, isNil, join } from 'lodash';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useSelectedGeocoding } from '@/hooks/use-selected-geocoding.hook';
import { CurrentWeatherDataSchema } from '@/model/schema/current-weather-data.schema';
import { CurrentWeatherData } from '@/model/types/current-weather-data.type';
import { WeatherData } from '@/model/types/weather-data.type';

type WeatherForecastApiContext = {
	weatherDataVisible: boolean;

	weatherData: WeatherData | null;

	setWeatherDataVisible: (weatherDataVisible: boolean) => void;
};

const WeatherForecastApiContext = createContext<WeatherForecastApiContext | null>(null);

type WeatherForecastApiContextProviderProps = {
	children: ReactNode;
};

export default function ({ children }: WeatherForecastApiContextProviderProps) {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [weatherDataVisible, setWeatherDataVisible] = useState<boolean>(false);

	const { selectedGeocoding } = useSelectedGeocoding();

	useEffect(() => {
		const fetchWeatherForecastData = async () => {
			let weatherData: WeatherData | null = null;

			if (!isNil(selectedGeocoding)) {
				const { coords } = selectedGeocoding;
				const { latitude, longitude } = coords;

				const rootUrl = `${process.env.NEXT_PUBLIC_OPEN_METEO_API}?latitude=${latitude}&longitude=${longitude}`;

				const currentParam = `&current=${join(
					Object.keys(CurrentWeatherDataSchema.shape).filter((it) => {
						return !eq('time', it);
					}),

					',',
				)}`;

				const url = rootUrl + currentParam;
				const response = await fetch(url);

				if (response.ok) {
					const { current } = await response.json();
					const { apparent_temperature, precipitation, relative_humidity_2m, temperature_2m, time, weather_code, wind_speed_10m } = current;

					const currentWeatherData: CurrentWeatherData = {
						apparent_temperature,
						precipitation,
						relative_humidity_2m,
						temperature_2m,
						time,
						weather_code,
						wind_speed_10m,
					};

					weatherData = { current: currentWeatherData };
				}
			}

			setWeatherData(weatherData);
		};

		fetchWeatherForecastData();
	}, [selectedGeocoding]);

	return <WeatherForecastApiContext.Provider value={{ setWeatherDataVisible, weatherData, weatherDataVisible }}>{children}</WeatherForecastApiContext.Provider>;
}

export const useWeatherForecastApiContext = () => {
	const context = useContext(WeatherForecastApiContext);

	if (isNil(context)) throw new Error('useWeatherForecastApiContext must only be used inside a WeatherForecastApiContextProvider!');
	return context;
};
