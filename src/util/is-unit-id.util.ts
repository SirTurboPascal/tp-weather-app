import { includes } from 'lodash';

import { UnitId } from '@/model/types/unit-id.type';

export function isUnitId(unitId: string): unitId is UnitId {
	const unitIds: UnitId[] = ['celsius', 'fahrenheit', 'inch', 'kmh', 'mm', 'mph'];

	return includes(unitIds, unitId);
}
