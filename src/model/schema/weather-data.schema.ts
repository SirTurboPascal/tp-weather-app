import { z } from 'zod';

import { CurrentWeatherDataSchema } from '@/model/schema/current-weather-data.schema';

export const WeatherData = z.object({
	current: CurrentWeatherDataSchema,
});
