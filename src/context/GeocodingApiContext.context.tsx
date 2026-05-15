import { isNil, map } from 'lodash';
import { createContext, ReactNode, useContext, useState } from 'react';

import { SearchFormSchema } from '@/model/schema/search-form-schema.schema';
import { Geocoding } from '@/model/types/geocoding.type';
import { SearchFormValues } from '@/model/types/search-form-values.type';

type GeocodingApiContext = {
	geocodingsVisible: boolean;
	pending: boolean;

	geocodings: Geocoding[];

	execute: (values: SearchFormValues) => Promise<void>;
	setGeocodingsVisible: (geocodingsVisible: boolean) => void;
};

const GeocodingApiContext = createContext<GeocodingApiContext | null>(null);

type GeocodingApiContextProviderProps = {
	children: ReactNode;
};

export default function ({ children }: GeocodingApiContextProviderProps) {
	const [geocodings, setGeocodings] = useState<Geocoding[]>([]);
	const [geocodingsVisible, setGeocodingsVisible] = useState<boolean>(false);
	const [pending, setPending] = useState<boolean>(false);

	const execute = async (values: SearchFormValues) => {
		const validationResult = SearchFormSchema.safeParse(values);

		if (validationResult.success) {
			const { searchTerm } = validationResult.data;

			setGeocodingsVisible(true);
			setPending(true);
			const response = await fetch(`${process.env.NEXT_PUBLIC_GEOCODING_API}?name=${searchTerm}&count=5`);

			if (response.ok) {
				const { results } = await response.json();

				const geocodings: Geocoding[] = map(results, (result) => {
					const { admin1, country, country_code, id, latitude, longitude, name } = result;

					return { coords: { latitude, longitude }, country, country_code, id, name, state: admin1 };
				});

				setGeocodings(geocodings);
				setPending(false);
			}
		}
	};

	return <GeocodingApiContext.Provider value={{ execute, geocodings, geocodingsVisible, pending, setGeocodingsVisible }}>{children}</GeocodingApiContext.Provider>;
}

export const useGeocodingApiContext = () => {
	const context = useContext(GeocodingApiContext);

	if (isNil(context)) throw new Error('useGeocodingApiContext must only be used inside a GeocodingApiContextProvider!');
	return context;
};
