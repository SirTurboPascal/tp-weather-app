import { z } from 'zod';

import { SearchFormSchema } from '@/model/schemas/search-form-schema.schema';

export type SearchFormValues = z.infer<typeof SearchFormSchema>;
