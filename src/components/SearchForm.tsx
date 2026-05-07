'use client';

import { ChangeEvent, SubmitEvent, useId, useState } from 'react';

import Icon from '@/components/Icon';

import { SearchFormValues } from '@/model/types/search-form-values.type';

const initialState: SearchFormValues = {
	searchTerm: '',
};

export default function () {
	const id = useId();

	const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>(initialState);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setSearchFormValues({
			...searchFormValues,

			[name]: value,
		});
	};

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
	};

	return (
		<form className='flex shrink-0 flex-col gap-200 md:flex-row' onSubmit={handleSubmit}>
			<label className='rounded-12 relative flex h-[51px] grow cursor-text items-center gap-200 bg-neutral-800 px-300 hover:bg-neutral-700' htmlFor={id}>
				<Icon name='search' size={20} />

				<input
					id={id}
					className='peer font-dm-sans grow text-[20px]/[120%] font-medium text-neutral-200 antialiased outline-none'
					onChange={handleChange}
					name='searchTerm'
					placeholder='Search for a place...'
					type='text'
					value={searchFormValues.searchTerm}
				/>

				<div className='rounded-16 border-neutral-0 pointer-events-none absolute -inset-50 hidden border-2 peer-focus:block' />
			</label>

			<button className='group rounded-12 font-dm-sans text-neutral-0 relative h-[51px] cursor-pointer bg-blue-500 px-300 font-medium outline-none select-none hover:bg-blue-700' type='submit'>
				<>Search</>

				<div className='rounded-16 pointer-events-none absolute -inset-50 hidden border-2 border-blue-500 group-focus:block' />
			</button>
		</form>
	);
}
