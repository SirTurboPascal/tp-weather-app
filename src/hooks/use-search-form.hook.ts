import { create } from 'zustand';

import { SearchFormValues } from '@/model/types/search-form-values.type';

type State = {
	values: SearchFormValues;
};

type Action = {
	setValue: (name: string, value: string) => void;
};

export const useSearchForm = create<State & Action>((set, get) => {
	return {
		values: {
			searchTerm: '',
		},

		setValue: (name, value) => {
			const { values } = get();

			set({ values: { ...values, [name]: value } });
		},
	};
});
