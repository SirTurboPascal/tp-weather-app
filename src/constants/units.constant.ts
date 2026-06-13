import { Quantity } from '@/model/types/quantity.type';
import { Unit } from '@/model/types/unit.type';

export const UNITS: Record<Quantity, Unit[]> = {
	precipitation: [
		{ id: 'inch', label: 'Inches', symbol: 'in' },
		{ id: 'mm', label: 'Millimeters', symbol: 'mm' },
	],

	temperature: [
		{ id: 'celsius', label: 'Celsius', symbol: '°C' },
		{ id: 'fahrenheit', label: 'Fahrenheit', symbol: '°F' },
	],

	wind_speed: [
		{ id: 'mph', symbol: 'mph' },
		{ id: 'kmh', symbol: 'km/h' },
	],
};
