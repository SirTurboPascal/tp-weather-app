import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/assets/images/logo.svg';

export default function () {
	return (
		<Link className='flex shrink-0 items-center gap-125 select-none' href='/'>
			<div className='relative size-[28px] md:size-500'>
				<Image alt='' loading='eager' src={logoImage} fill unoptimized />
			</div>

			<h4 className='font-bricolage-grotesque text-neutral-0 text-[15px] font-bold whitespace-nowrap antialiased md:text-[22px]'>Weather Now</h4>
		</Link>
	);
}
