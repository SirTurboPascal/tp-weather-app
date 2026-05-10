import bgTodayLargeImage from '@/assets/images/bg-today-large.svg';
import bgTodaySmallImage from '@/assets/images/bg-today-small.svg';
import WeatherIcon from '@/components/WeatherIcon';
import { useGeolocation } from '@/hooks/use-geolocation.hook';

import { useWeatherData } from '@/hooks/use-weather-data.hook';
import { formatDate } from '@/util/format-date.util';
import { isNil } from 'lodash';
import WeatherDataTile from './WeatherDataTile';

export default function () {
	const { geolocation } = useGeolocation();
	const { weatherData } = useWeatherData();

	if (isNil(geolocation) || isNil(weatherData)) {
		return null;
	}

	const { country, name } = geolocation;
	const { current } = weatherData;
	const { apparent_temperature, relative_humidity_2m, time, precipitation, weather_code, wind_speed_10m } = current;

	return (
		<div className='flex flex-col gap-250'>
			<div className='rounded-20 relative flex flex-col gap-250 overflow-hidden px-300 md:flex-row md:justify-between md:px-500'>
				<div className='bg-image md:hidden' style={{ backgroundImage: `url(${bgTodaySmallImage.src})` }} />
				<div className='bg-image hidden md:block' style={{ backgroundImage: `url(${bgTodayLargeImage.src})` }} />

				<div className='relative flex h-[286px] grow flex-col items-center justify-center gap-200 md:flex-row md:justify-between'>
					<div className='flex cursor-default flex-col gap-150 text-center antialiased select-none md:text-left'>
						<h4 className='font-dm-sans text-neutral-0 text-[28px]/[120%] font-bold'>{`${name}, ${country}`}</h4>
						<p className='font-dm-sans text-neutral-0 text-[18px]/[120%] font-medium opacity-60'>{formatDate(time)}</p>
					</div>

					<div className='items flex gap-200'>
						<WeatherIcon weatherCode={weather_code} />

						<p className='font-dm-sans text-neutral-0 letter-spacing-[-2px] cursor-default text-[96px]/[100%] font-semibold italic antialiased select-none'>20°</p>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-250 md:grid-cols-4'>
				<WeatherDataTile data={`${apparent_temperature}°C`} label='Feels Like' />
				<WeatherDataTile data={`${relative_humidity_2m}%`} label='Humidity' />
				<WeatherDataTile data={`${wind_speed_10m} km/h`} label='Wind' />
				<WeatherDataTile data={`${precipitation} mm`} label='Precipitation' />
			</div>
		</div>
	);
}
