import { map, round } from 'lodash';

import Typography from '@/components/Typography';
import WeatherIcon from '@/components/WeatherIcon';

import { DailyWeatherData } from '@/model/types/daily-weather-data.type';
import { getWeekday } from '@/util/get-weekday.util';

type DailyWeatherDataProps = {
	dailyWeatherData: DailyWeatherData;
};

export default function ({ dailyWeatherData }: DailyWeatherDataProps) {
	return (
		<div className='flex flex-col gap-250'>
			<Typography className='text-neutral-0 gap-250 self-start' variant='preset-5'>
				<>Daily Forecast</>
			</Typography>

			<div className='grid grid-cols-3 gap-200 md:grid-cols-7'>
				{map(dailyWeatherData.time, (time, i) => {
					const temperature_2m_max = dailyWeatherData.temperature_2m_max[i];
					const temperature_2m_min = dailyWeatherData.temperature_2m_min[i];
					const weather_code = dailyWeatherData.weather_code[i];

					return (
						<div key={time} className='rounded-12 flex h-[165px] flex-col items-center justify-center gap-200 border border-neutral-600 bg-neutral-800 px-100'>
							<Typography className='text-neutral-0 text-center' variant='preset-6'>
								<>{getWeekday(time)}</>
							</Typography>

							<WeatherIcon size={60} weatherCode={weather_code} />

							<div className='flex items-center justify-between self-stretch'>
								<Typography className='text-neutral-0' variant='preset-7'>
									<>{round(temperature_2m_max)}°</>
								</Typography>

								<Typography className='text-neutral-200' variant='preset-7'>
									<>{round(temperature_2m_min)}°</>
								</Typography>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
