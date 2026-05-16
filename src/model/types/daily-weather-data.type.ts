import { z } from 'zod';

import { DailyWeatherDataSchema } from '@/model/schema/daily-weather-data.schema';

export type DailyWeatherData = z.infer<typeof DailyWeatherDataSchema>;
