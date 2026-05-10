export type Geolocation = {
	country: string;
	name: string;
} & Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;
