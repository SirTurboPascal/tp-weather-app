import { isNil } from 'lodash';

import CurrentWeatherData from '@/components/CurrentWeatherData';

import { useWeatherForecastApiContext } from '@/context/WeatherForecastApiContext.context';
import { useSelectedGeocoding } from '@/hooks/use-selected-geocoding.hook';

export default function () {
	const { selectedGeocoding } = useSelectedGeocoding();
	const { weatherData } = useWeatherForecastApiContext();

	if (isNil(selectedGeocoding) || isNil(weatherData)) {
		return null;
	}

	return <CurrentWeatherData currentWeatherData={weatherData.current} geocoding={selectedGeocoding} />;
}
