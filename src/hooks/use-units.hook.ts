import { create } from 'zustand';

import { Quantity } from '@/model/types/quantity.type';
import { Unit } from '@/model/types/unit.type';

type State = {
	units: Record<Quantity, Unit['id']>;
};

type Action = {
	setUnit: (quantity: Quantity, unit: State['units'][Quantity]) => void;
};

export const useUnits = create<State & Action>((set, get) => {
	return {
		units: {
			precipitation: 'mm',
			temperature: 'celsius',
			wind_speed: 'kmh',
		},

		setUnit: (quantity, unit) => {
			const { units } = get();

			set({
				units: { ...units, [quantity]: unit },
			});
		},
	};
});
