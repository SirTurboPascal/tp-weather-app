'use client';

import SearchForm from '@/components/SearchForm';
import Typography from '@/components/Typography';
import WeatherData from '@/components/WeatherData';
import GeocodingApiContextProvider from '@/context/GeocodingApiContext.context';
import WeatherForecastApiContextProvider from '@/context/WeatherForecastApiContext.context';

export default function () {
	return (
		<>
			<Typography className='text-neutral-0 text-center' variant='preset-2'>
				<>How's the sky looking today?</>
			</Typography>

			<GeocodingApiContextProvider>
				<WeatherForecastApiContextProvider>
					<div className='flex flex-col gap-400'>
						<SearchForm />

						<WeatherData />
					</div>
				</WeatherForecastApiContextProvider>
			</GeocodingApiContextProvider>
		</>
	);
}
