import { create } from 'zustand';

import { Geocoding } from '@/model/types/geocoding.type';

type State = {
	selectedGeocoding: Geocoding | null;
};

type Action = {
	setSelectedGeocoding: (geocoding: State['selectedGeocoding']) => void;
};

export const useSelectedGeocoding = create<State & Action>((set) => {
	return {
		selectedGeocoding: null,

		setSelectedGeocoding: (selectedGeocoding) => {
			set({ selectedGeocoding });
		},
	};
});
