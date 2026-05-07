import Logo from '@/components/Logo';

export default function () {
	return (
		<header className='flex flex-col gap-600 lg:gap-800'>
			<div className='flex items-center'>
				<Logo />
			</div>
		</header>
	);
}
