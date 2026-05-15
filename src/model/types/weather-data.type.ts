import { z } from 'zod';

import { WeatherData } from '@/model/schema/weather-data.schema';

export type WeatherData = z.infer<typeof WeatherData>;
