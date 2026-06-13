import { ComponentPropsWithoutRef, ReactNode } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

type MenuButtonProps = {
	menuOpen: boolean;

	menu: ReactNode;
} & Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>;

export default function ({ menu, menuOpen, onClick }: MenuButtonProps) {
	return (
		<div className='relative shrink-0'>
			<button className='rounded-8 flex h-[43px] cursor-pointer items-center gap-125 bg-neutral-800 px-200' onClick={onClick} type='button'>
				<Icon name='cog' size={16} />

				<Typography className='text-neutral-0' variant='preset-7'>
					<>Units</>
				</Typography>

				<Icon name='chevronDown' size={16} />
			</button>

			{menuOpen && <>{menu}</>}
		</div>
	);
}
