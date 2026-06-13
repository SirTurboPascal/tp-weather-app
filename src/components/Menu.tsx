import { isNil } from 'lodash';
import { ReactNode, useEffect, useRef } from 'react';

type MenuProps = {
	children: ReactNode;

	onClickAway: () => void;
};

export default function ({ children, onClickAway }: MenuProps) {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickAway = (event: MouseEvent) => {
			if (!isNil(menuRef.current) && !menuRef.current.contains(event.target as Node)) {
				onClickAway();
			}
		};

		document.addEventListener('mousedown', handleClickAway);
		return () => document.removeEventListener('mousedown', handleClickAway);
	}, [onClickAway]);

	return (
		<div className='rounded-12 absolute top-[59px] right-0 z-9999 flex w-[214px] flex-col gap-100 overflow-hidden border border-neutral-600 bg-neutral-800 p-100' ref={menuRef}>
			<>{children}</>
		</div>
	);
}
