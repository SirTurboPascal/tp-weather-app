import { z } from 'zod';

export const DailyWeatherDataSchema = z.object({
	temperature_2m_max: z.array(z.number()),
	temperature_2m_min: z.array(z.number()),
	weather_code: z.array(z.number()),

	time: z.array(z.string()),
});
