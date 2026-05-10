import Icon from '@/components/Icon';

import { WEATHER_ICON_RECORD } from '@/constants/weather-icon-record.constant';

type WeatherIcon = {
	weatherCode: number;
};

export default function ({ weatherCode }: WeatherIcon) {
	return <Icon name={WEATHER_ICON_RECORD[weatherCode]} size={100} />;
}
