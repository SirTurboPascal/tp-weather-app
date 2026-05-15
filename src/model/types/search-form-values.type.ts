import { z } from 'zod';

import { SearchFormSchema } from '@/model/schema/search-form-schema.schema';

export type SearchFormValues = z.infer<typeof SearchFormSchema>;
