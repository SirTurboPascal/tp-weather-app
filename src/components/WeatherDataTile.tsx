type WeatherDataTileProps = {
	data: string;
	label: string;
};

export default function ({ data, label }: WeatherDataTileProps) {
	return (
		<div className='rounded-12 flex h-[118px] cursor-default flex-col justify-between overflow-hidden border border-neutral-600 bg-neutral-800 p-250 antialiased select-none'>
			<span className='font-dm-sans text-[18px]/[120%] font-medium text-neutral-200'>{label}</span>

			<p className='font-dm-sans text-neutral-0 text-[32px]/[100%] font-light'>{data}</p>
		</div>
	);
}
