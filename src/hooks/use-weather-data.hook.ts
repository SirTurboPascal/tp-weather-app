import { isNil } from 'lodash';
import { useEffect, useState } from 'react';

import { useGeolocation } from '@/hooks/use-geolocation.hook';
import { WeatherData } from '@/model/types/weather-data.type';

export const useWeatherData = () => {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const { geolocation } = useGeolocation();

	useEffect(() => {
		const fetchWeatherData = async () => {
			let weatherData: WeatherData | null = null;

			if (!isNil(geolocation)) {
				const { latitude, longitude } = geolocation;
				const rootUrl = `${process.env.NEXT_PUBLIC_OPEN_METEO_API}?latitude=${latitude}&longitude=${longitude}`;
				const currentParams = '&current=apparent_temperature,precipitation,relative_humidity_2m,temperature_2m,weather_code,wind_speed_10m';
				const url = `${rootUrl}${currentParams}`;
				const response = await fetch(url);

				if (response.ok) {
					weatherData = await response.json();

					console.log(weatherData);
				}
			}

			setWeatherData(weatherData);
		};

		fetchWeatherData();
	}, [geolocation]);

	return { weatherData };
};
