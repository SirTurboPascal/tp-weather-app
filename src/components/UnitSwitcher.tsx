import { eq, map } from 'lodash';
import { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import Typography from '@/components/Typography';
import UnitButton from '@/components/UnitButton';

import { UNITS } from '@/constants/units.constant';
import { useUnits } from '@/hooks/use-units.hook';
import { Quantity } from '@/model/types/quantity.type';
import { isUnitId } from '@/util/is-unit-id.util';

type UnitSwitcherProps = {
	label: string;

	quantity: Quantity;
} & Pick<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'>;

export default function ({ label, onChange, quantity }: UnitSwitcherProps) {
	const { setUnit, units } = useUnits();

	const selectedUnit = units[quantity];

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		if (!isUnitId(value)) throw new Error(`${value} is not a valid UnitId!`);
		setUnit(quantity, value);
	};

	return (
		<div className='flex flex-col gap-100'>
			<Typography className='text-neutral-300' variant='preset-8'>
				<>{label}</>
			</Typography>

			<div className='flex flex-col gap-50'>
				{map(UNITS[quantity], (unit) => {
					const { id } = unit;

					return <UnitButton key={id} checked={eq(id, selectedUnit)} name={quantity} onChange={handleChange} unit={unit} />;
				})}
			</div>
		</div>
	);
}
