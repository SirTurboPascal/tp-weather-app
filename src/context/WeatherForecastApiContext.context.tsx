import { eq, isNil, join } from 'lodash';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useSelectedGeocoding } from '@/hooks/use-selected-geocoding.hook';
import { useUnits } from '@/hooks/use-units.hook';
import { CurrentWeatherDataSchema } from '@/model/schema/current-weather-data.schema';
import { DailyWeatherDataSchema } from '@/model/schema/daily-weather-data.schema';
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
	const { units } = useUnits();

	useEffect(() => {
		const fetchWeatherForecastData = async () => {
			let weatherData: WeatherData | null = null;

			if (!isNil(selectedGeocoding)) {
				const { latitude, longitude } = selectedGeocoding.coords;

				const rootUrl = `${process.env.NEXT_PUBLIC_OPEN_METEO_API}?latitude=${latitude}&longitude=${longitude}`;
				const filteredCurrentParam = Object.keys(CurrentWeatherDataSchema.shape).filter((it) => !eq(it, 'time'));
				const currentParam = `&current=${join(filteredCurrentParam, ',')}`;
				const filteredDailyParams = Object.keys(DailyWeatherDataSchema.shape).filter((it) => !eq(it, 'time'));
				const dailyParams = `&daily=${join(filteredDailyParams, ',')}`;
				const unitParams = `&precipitation_unit=${units.precipitation}&temperature_unit=${units.temperature}&wind_speed_unit=${units.wind_speed}`;

				const url = rootUrl + currentParam + dailyParams + unitParams;
				const response = await fetch(url);

				if (response.ok) {
					weatherData = await response.json();
				}
			}

			setWeatherData(weatherData);
		};

		fetchWeatherForecastData();
	}, [selectedGeocoding, units]);

	return <WeatherForecastApiContext.Provider value={{ setWeatherDataVisible, weatherData, weatherDataVisible }}>{children}</WeatherForecastApiContext.Provider>;
}

export const useWeatherForecastApiContext = () => {
	const context = useContext(WeatherForecastApiContext);

	if (isNil(context)) throw new Error('useWeatherForecastApiContext must only be used inside a WeatherForecastApiContextProvider!');
	return context;
};
