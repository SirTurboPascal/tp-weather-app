import { useUnitSystem } from '@/hooks/use-unit-system.hook';

import Typography from '@/components/Typography';

import { useUnits } from '@/hooks/use-units.hook';

export default function () {
	const { isMetric } = useUnitSystem();
	const { setUnit } = useUnits();

	const handleClick = () => {
		setUnit('precipitation', isMetric ? 'inch' : 'mm');
		setUnit('temperature', isMetric ? 'fahrenheit' : 'celsius');
		setUnit('wind_speed', isMetric ? 'mph' : 'kmh');
	};

	return (
		<button className='rounded-8 h-[39px] cursor-pointer px-100 hover:bg-neutral-700' onClick={handleClick}>
			<Typography className='text-neutral-0 text-left' variant='preset-7'>
				<>Switch to {isMetric ? 'Imperial' : 'Metric'}</>
			</Typography>
		</button>
	);
}
