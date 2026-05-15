import { TYPOGRAPHY_CONFIGS } from '@/constants/typography-configs.constant';

type SubmitButtonProps = {
	label: string;
};

export default function ({ label }: SubmitButtonProps) {
	const typographyConfig = TYPOGRAPHY_CONFIGS['preset-5'];

	return (
		<button
			className={`${typographyConfig.styles} text-neutral-0 rounded-12 group relative h-[56px] shrink-0 cursor-pointer bg-blue-500 px-300 font-medium outline-none select-none hover:bg-blue-700`}
			type='submit'
		>
			<>{label}</>

			<div className='rounded-16 absolute -inset-50 hidden border-2 border-blue-500 group-focus:block' />
		</button>
	);
}
