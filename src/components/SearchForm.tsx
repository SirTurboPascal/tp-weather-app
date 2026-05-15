import { ChangeEvent, SubmitEvent } from 'react';

import GeocodingSelect from '@/components/GeocodingSelect';
import SubmitButton from '@/components/SubmitButton';
import TextField from '@/components/TextField';

import { useGeocodingApiContext } from '@/context/GeocodingApiContext.context';
import { useSearchForm } from '@/hooks/use-search-form.hook';

export default function () {
	const { setValue, values } = useSearchForm();
	const { execute, setGeocodingsVisible } = useGeocodingApiContext();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setGeocodingsVisible(false);
		setValue(name, value);
	};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		await execute(values);
	};

	return (
		<form className='relative flex flex-col gap-200 md:flex-row lg:mx-auto lg:w-[656px]' onSubmit={handleSubmit}>
			<TextField name='searchTerm' onChange={handleChange} placeholder='Search for a city, e.g., New York' value={values.searchTerm} />
			<SubmitButton label='Search' />

			<GeocodingSelect />
		</form>
	);
}
