import Typography from './Typography';

type WeatherDataTileProps = {
	label: string;
	data: string;
};

export default function ({ label, data }: WeatherDataTileProps) {
	return (
		<div className='rounded-12 flex flex-col gap-300 border border-neutral-600 bg-neutral-800 p-250'>
			<Typography className='text-neutral-200' variant='preset-6'>
				<>{label}</>
			</Typography>

			<Typography className='text-neutral-0' variant='preset-3'>
				<>{data}</>
			</Typography>
		</div>
	);
}
