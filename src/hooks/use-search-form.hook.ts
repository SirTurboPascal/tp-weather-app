import { create } from 'zustand';

import { SearchFormValues } from '@/model/types/search-form-values.type';

type State = {
	values: SearchFormValues;
};

type Action = {
	reset: () => void;
	setValue: (name: string, value: string) => void;
};

const initialState: SearchFormValues = {
	searchTerm: '',
};

export const useSearchForm = create<State & Action>((set, get) => {
	return {
		values: initialState,

		reset: () => {
			set({ values: initialState });
		},

		setValue: (name, value) => {
			const { values } = get();

			set({ values: { ...values, [name]: value } });
		},
	};
});
