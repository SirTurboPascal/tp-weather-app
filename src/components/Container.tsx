import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

export default function ({ children }: ContainerProps) {
	return <div className='mx-auto flex w-[343px] flex-col py-200 md:w-[720px] md:py-300 lg:w-[1216px] lg:py-600'>{children}</div>;
}
