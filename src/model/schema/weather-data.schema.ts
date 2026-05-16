import { z } from 'zod';

import { CurrentWeatherDataSchema } from '@/model/schema/current-weather-data.schema';
import { DailyWeatherDataSchema } from '@/model/schema/daily-weather-data.schema';

export const WeatherData = z.object({
	current: CurrentWeatherDataSchema,
	daily: DailyWeatherDataSchema,
});
