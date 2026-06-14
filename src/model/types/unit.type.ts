import { UnitId } from '@/model/types/unit-id.type';
import { UnitSymbol } from '@/model/types/unit-symbol.type';

export type Unit = {
	label?: string;

	id: UnitId;
	symbol: UnitSymbol;
};
