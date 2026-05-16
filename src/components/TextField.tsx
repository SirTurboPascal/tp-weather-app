import { ComponentPropsWithoutRef, FocusEvent, useId } from 'react';

import Icon from '@/components/Icon';

import { TYPOGRAPHY_CONFIGS } from '@/constants/typography-configs.constant';

export default function ({ name, onChange, placeholder, value }: Pick<ComponentPropsWithoutRef<'input'>, 'name' | 'onChange' | 'placeholder' | 'value'>) {
	const id = useId();

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		setTimeout(() => event.target.select(), 0);
	};

	return (
		<label className='rounded-12 relative flex h-[56px] grow cursor-text items-center gap-200 bg-neutral-800 px-300 hover:bg-neutral-700' htmlFor={id}>
			<Icon name='search' size={20} />

			<input
				id={id}
				className={`${TYPOGRAPHY_CONFIGS['preset-5'].styles} peer grow font-medium text-neutral-200 outline-none`}
				autoCapitalize='words'
				name={name}
				onChange={onChange}
				onFocus={handleFocus}
				placeholder={placeholder}
				type='text'
				value={value}
			/>

			<div className='rounded-16 border-neutral-0 absolute -inset-50 hidden border-2 peer-focus:block' />
		</label>
	);
}
