import { every, includes } from 'lodash';
import { useMemo } from 'react';

import { UNIT_SYSTEMS } from '@/constants/unit-systems.constant';
import { useUnits } from '@/hooks/use-units.hook';

export const useUnitSystem = () => {
	const { units } = useUnits();

	const isImperial = useMemo(() => {
		return every(Object.values(units), (unit) => {
			return includes(UNIT_SYSTEMS.imperial, unit);
		});
	}, [units]);

	const isMetric = useMemo(() => {
		return every(Object.values(units), (unit) => {
			return includes(UNIT_SYSTEMS.metric, unit);
		});
	}, [units]);

	return { isImperial, isMetric };
};
