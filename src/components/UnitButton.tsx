import { isNil } from 'lodash';
import { ComponentPropsWithoutRef, useId } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { Unit } from '@/model/types/unit.type';

type UnitButtonProps = {
	unit: Unit;
} & Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'name' | 'onChange' | 'value'>;

export default function ({ checked, name, onChange, unit }: UnitButtonProps) {
	const id = useId();

	return (
		<label className='rounded-8 flex h-[39px] cursor-pointer items-center justify-between gap-125 overflow-hidden px-100 hover:bg-neutral-700' htmlFor={id}>
			<Typography className='text-neutral-0' variant='preset-7'>
				<>{isNil(unit.label) ? unit.symbol : `${unit.label} (${unit.symbol})`}</>
			</Typography>

			<input id={id} className='sr-only' checked={checked} name={name} onChange={onChange} type='radio' value={unit.id} />
			{checked && <Icon name='check' size={16} />}
		</label>
	);
}
