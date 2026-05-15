export type Geocoding = {
	country: string;
	country_code: string;
	id: string;
	name: string;
	state: string;

	coords: Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;
};
