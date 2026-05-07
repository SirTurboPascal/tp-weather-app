import { z } from 'zod';

export const SearchFormSchema = z.object({
	searchTerm: z.string(),
});
