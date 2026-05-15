import { z } from 'zod';

export const CurrentWeatherDataSchema = z.object({
	apparent_temperature: z.number(),
	precipitation: z.number(),
	relative_humidity_2m: z.number(),
	temperature_2m: z.number(),
	weather_code: z.number(),
	wind_speed_10m: z.number(),

	time: z.string(),
});
