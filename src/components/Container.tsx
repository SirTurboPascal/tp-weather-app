import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

export default function ({ children }: ContainerProps) {
	return <div className='mx-auto flex w-[343px] flex-col gap-400 py-200 md:w-[720px] md:py-300 lg:w-[1216px] lg:gap-y-600 lg:py-600'>{children}</div>;
}
