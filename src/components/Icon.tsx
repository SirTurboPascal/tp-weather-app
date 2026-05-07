import Image from 'next/image';

import { ICON_POOL } from '@/constants/icon-pool.constant';
import { IconName } from '@/model/types/icon-name.type';

type IconProps = {
	size: number;

	name: IconName;
};

export default function ({ name, size }: IconProps) {
	return <Image className='select-none' alt='' height={size} src={ICON_POOL[name]} unoptimized width={size} />;
}
