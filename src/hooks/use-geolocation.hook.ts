import { create } from 'zustand';

import { Geolocation } from '@/model/types/geolocation.type';

type State = {
	geolocation: Geolocation | null;
};

type Action = {
	setGeolocation: (geolocation: State['geolocation']) => void;
};

export const useGeolocation = create<State & Action>((set) => {
	return {
		geolocation: null,

		setGeolocation: (geolocation) => {
			set({ geolocation });
		},
	};
});
