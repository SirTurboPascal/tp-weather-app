import Icon from '@/components/Icon';

import { IconName } from '@/model/types/icon-name.type';

type WeatherIconProps = {
	size: number;
	weatherCode: number;
};

export default function ({ size, weatherCode }: WeatherIconProps) {
	let iconName: IconName;

	switch (weatherCode) {
		case 0:
		case 1:
			iconName = 'sunny';
			break;

		case 2:
			iconName = 'partlyCloudy';
			break;

		case 3:
			iconName = 'overcast';
			break;

		case 45:
		case 48:
			iconName = 'fog';
			break;

		case 51:
		case 53:
		case 55:
		case 56:
		case 57:
			iconName = 'drizzle';
			break;

		case 61:
		case 63:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			iconName = 'rain';
			break;

		case 71:
		case 73:
		case 75:
		case 77:
		case 85:
		case 86:
			iconName = 'snow';
			break;

		case 95:
		case 96:
		case 99:
			iconName = 'storm';
			break;

		default:
			iconName = 'error';
	}

	return <Icon name={iconName} size={size} />;
}
