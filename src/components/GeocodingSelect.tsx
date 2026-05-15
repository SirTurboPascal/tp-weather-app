import { isEmpty, map } from 'lodash';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { useGeocodingApiContext } from '@/context/GeocodingApiContext.context';
import { useSearchForm } from '@/hooks/use-search-form.hook';
import { useSelectedGeocoding } from '@/hooks/use-selected-geocoding.hook';
import { Geocoding } from '@/model/types/geocoding.type';

type GeocodingProps = {
	geocoding: Geocoding;
};

const GeocodingOption = function ({ geocoding }: GeocodingProps) {
	const { setSelectedGeocoding } = useSelectedGeocoding();
	const { setGeocodingsVisible } = useGeocodingApiContext();
	const { setValue } = useSearchForm();

	const { country_code, name, state } = geocoding;
	const title = `${name} (${country_code}, ${state})`;

	const handleClick = () => {
		setSelectedGeocoding(geocoding);
		setValue('searchTerm', title);

		setGeocodingsVisible(false);
	};

	return (
		<li className='rounded-8 flex h-[39px] cursor-pointer items-center border border-transparent px-100 hover:border-be-neutral-600 hover:bg-neutral-700' onClick={handleClick}>
			<Typography className='text-neutral-0 overflow-hidden text-ellipsis whitespace-nowrap' variant='preset-7'>
				{title}
			</Typography>
		</li>
	);
};

export default function () {
	const { geocodings, geocodingsVisible, pending } = useGeocodingApiContext();

	if (!geocodingsVisible) {
		return null;
	}

	return (
		<div className='rounded-12 absolute top-[144px] right-0 left-0 z-9999 border border-neutral-700 bg-neutral-800 p-100 md:top-[72px]'>
			{pending ? (
				<div className='flex items-center gap-125'>
					<Icon name='loading' size={20} />

					<Typography className='text-neutral-0' variant='preset-7'>
						<>Search in progress...</>
					</Typography>
				</div>
			) : isEmpty(geocodings) ? (
				<Typography className='text-neutral-0 flex h-[39px] items-center px-100' variant='preset-7'>
					<>No search results found!</>
				</Typography>
			) : (
				<ul className='flex flex-col gap-25'>
					{map(geocodings, (geocoding) => {
						return <GeocodingOption key={geocoding.id} geocoding={geocoding} />;
					})}
				</ul>
			)}
		</div>
	);
}
