import { UnitId } from '@/model/types/unit-id.type';
import { UnitSystem } from '@/model/types/unit-system.type';

export const UNIT_SYSTEMS: Record<UnitSystem, UnitId[]> = {
	imperial: ['fahrenheit', 'inch', 'mph'],
	metric: ['celsius', 'kmh', 'mm'],
};
