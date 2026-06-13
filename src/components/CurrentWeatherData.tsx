import { find, round } from 'lodash';

import bgTodayLargeImage from '@/assets/images/bg-today-large.svg';
import bgTodaySmallImage from '@/assets/images/bg-today-small.svg';
import Typography from '@/components/Typography';
import WeatherDataTile from '@/components/WeatherDataTile';
import WeatherIcon from '@/components/WeatherIcon';

import { UNITS } from '@/constants/units.constant';
import { useUnits } from '@/hooks/use-units.hook';
import { CurrentWeatherData } from '@/model/types/current-weather-data.type';
import { Geocoding } from '@/model/types/geocoding.type';
import { formatDate } from '@/util/format-date.util';

type CurrentWeatherDataProps = {
	currentWeatherData: CurrentWeatherData;
	geocoding: Geocoding;
};

export default function ({ currentWeatherData, geocoding }: CurrentWeatherDataProps) {
	const { units } = useUnits();

	const { apparent_temperature, precipitation, relative_humidity_2m, temperature_2m, time, weather_code, wind_speed_10m } = currentWeatherData;
	const { country, name } = geocoding;

	const unit = find(UNITS.temperature, { id: units.temperature });

	return (
		<div className='flex flex-col gap-250'>
			<div className='rounded-20 relative flex h-[286px] flex-col justify-center gap-200 overflow-hidden px-300'>
				<div className='bg-image hidden md:block' style={{ backgroundImage: `url(${bgTodayLargeImage.src})` }} />
				<div className='bg-image md:hidden' style={{ backgroundImage: `url(${bgTodaySmallImage.src})` }} />

				<div className='relative flex flex-col items-center gap-150 md:flex-row md:justify-between'>
					<div className='flex flex-col gap-150'>
						<Typography className='text-neutral-0 text-center md:text-left' as='h4' variant='preset-4'>{`${name}, ${country}`}</Typography>

						<Typography className='text-neutral-0 text-center opacity-80 md:text-left' variant='preset-6'>
							<>{formatDate(time)}</>
						</Typography>
					</div>

					<div className='flex items-center justify-center gap-250'>
						<WeatherIcon size={120} weatherCode={weather_code} />

						<Typography className='text-neutral-0' variant='preset-1'>
							<>{`${round(temperature_2m)} ${unit?.symbol}`}</>
						</Typography>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-200 md:grid-cols-4'>
				<WeatherDataTile data={`${round(apparent_temperature)} ${unit?.symbol}`} label='Feels Like' />
				<WeatherDataTile data={`${relative_humidity_2m} %`} label='Humidity' />
				<WeatherDataTile data={`${round(wind_speed_10m)} ${units.wind_speed}`} label='Wind' />
				<WeatherDataTile data={`${precipitation} ${units.precipitation}`} label='Precipitation' />
			</div>
		</div>
	);
}
