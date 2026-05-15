'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

export default function () {
	const router = useRouter();

	const handleClick = () => {
		router.refresh();
	};

	return (
		<div className='flex flex-col items-center gap-300'>
			<Icon name='error' size={50} />

			<Typography className='text-neutral-0 text-center' variant='preset-2'>
				<>Something went wrong</>
			</Typography>

			<Typography className='text-center font-medium text-neutral-200' variant='preset-5'>
				<>An unexpected error has occurred. Please try again later.</>
			</Typography>

			<button className='text-neutral-0 rounded-8 flex h-[43px] shrink-0 cursor-pointer items-center gap-125 bg-neutral-800 px-200 select-none' onClick={handleClick}>
				<Icon name='retry' size={0} />

				<>Retry</>
			</button>
		</div>
	);
}
