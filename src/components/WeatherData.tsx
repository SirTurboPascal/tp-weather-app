import { isNil } from 'lodash';

import CurrentWeatherData from '@/components/CurrentWeatherData';
import DailyWeatherData from '@/components/DailyWeatherData';

import { useWeatherForecastApiContext } from '@/context/WeatherForecastApiContext.context';
import { useSelectedGeocoding } from '@/hooks/use-selected-geocoding.hook';

export default function () {
	const { selectedGeocoding } = useSelectedGeocoding();
	const { weatherData } = useWeatherForecastApiContext();

	if (isNil(selectedGeocoding) || isNil(weatherData)) {
		return null;
	}

	return (
		<div className='flex flex-col gap-400 lg:gap-600'>
			<CurrentWeatherData currentWeatherData={weatherData.current} geocoding={selectedGeocoding} />
			<DailyWeatherData dailyWeatherData={weatherData.daily} />
		</div>
	);
}
