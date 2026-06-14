import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Quantity } from '@/model/types/quantity.type';
import { Unit } from '@/model/types/unit.type';

type State = {
	units: Record<Quantity, Unit['id']>;
};

type Action = {
	setUnit: (quantity: Quantity, unit: State['units'][Quantity]) => void;
};

export const useUnits = create<State & Action>()(
	persist(
		(set, get) => ({
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
		}),
		{ name: 'units' },
	),
);
