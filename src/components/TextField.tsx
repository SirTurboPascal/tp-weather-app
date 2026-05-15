import { ComponentPropsWithoutRef, useId } from 'react';

import Icon from '@/components/Icon';

import { TYPOGRAPHY_CONFIGS } from '@/constants/typography-configs.constant';

export default function ({ name, onChange, placeholder, value }: Pick<ComponentPropsWithoutRef<'input'>, 'name' | 'onChange' | 'placeholder' | 'value'>) {
	const id = useId();

	const typographyConfig = TYPOGRAPHY_CONFIGS['preset-5'];

	return (
		<label className='rounded-12 relative flex h-[56px] grow cursor-text items-center gap-200 bg-neutral-800 px-300 hover:bg-neutral-700' htmlFor={id}>
			<Icon name='search' size={20} />

			<input id={id} className={`${typographyConfig.styles} peer grow font-medium text-neutral-200 outline-none`} name={name} onChange={onChange} placeholder={placeholder} type='text' value={value} />
			<div className='rounded-16 border-neutral-0 absolute -inset-50 hidden border-2 peer-focus:block' />
		</label>
	);
}
