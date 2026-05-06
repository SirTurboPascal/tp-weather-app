import Logo from '@/components/Logo';

export default function () {
	return (
		<header className='flex flex-col gap-600 lg:gap-800'>
			<div className='flex items-center'>
				<Logo />
			</div>

			<h1 className='text-neutral-0 font-bricolage-grotesque text-center text-[52px]/[120%] font-bold antialiased'>How's the sky looking today?</h1>
		</header>
	);
}
