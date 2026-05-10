'use client';

import { isEmpty } from 'lodash';
import { SubmitEvent, useId } from 'react';

import Icon from '@/components/Icon';

import { useGeolocation } from '@/hooks/use-geolocation.hook';
import { useSearchForm } from '@/hooks/use-search-form.hook';

export default function () {
	const id = useId();
	const { setGeolocation } = useGeolocation();
	const { values, reset, setValue } = useSearchForm();

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const { searchTerm } = values;
		const url = `${process.env.NEXT_PUBLIC_GEOCODING_API}?name=${searchTerm}&count=1`;
		const response = await fetch(url);

		if (response.ok) {
			const { results } = await response.json();

			if (isEmpty(results)) {
				window.alert(`No results were found for the search term "${searchTerm}"!`);

				return;
			}

			const { country, name, latitude, longitude } = results[0];
			setGeolocation({ country, name, latitude, longitude });
			reset();
		}
	};

	return (
		<form className='flex shrink-0 flex-col gap-200 md:flex-row lg:mx-auto lg:w-[656px]' onSubmit={handleSubmit}>
			<label className='rounded-12 relative flex h-[51px] grow cursor-text items-center gap-200 bg-neutral-800 px-300 hover:bg-neutral-700' htmlFor={id}>
				<Icon name='search' size={20} />

				<input
					id={id}
					className='peer font-dm-sans grow text-[20px]/[120%] font-medium text-neutral-200 antialiased outline-none'
					onChange={({ target }) => setValue(target.name, target.value)}
					name='searchTerm'
					placeholder='Search for a place...'
					type='text'
					value={values.searchTerm}
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
