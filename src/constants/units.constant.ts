import { Quantity } from '@/model/types/quantity.type';
import { Unit } from '@/model/types/unit.type';

export const UNITS: Record<Quantity, Unit[]> = {
	precipitation: [
		{ id: 'inch', label: 'Inches', symbol: 'in' },
		{ id: 'mm', label: 'Millimeters', symbol: 'mm' },
	],

	temperature: [
		{ id: 'celsius', label: 'Celsius', symbol: '°' },
		{ id: 'fahrenheit', label: 'Fahrenheit', symbol: '°' },
	],

	wind_speed: [
		{ id: 'mph', symbol: 'mph' },
		{ id: 'kmh', symbol: 'km/h' },
	],
};
