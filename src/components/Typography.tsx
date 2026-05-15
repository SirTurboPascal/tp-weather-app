import { clsx } from 'clsx';
import { JSX, PropsWithChildren } from 'react';

import { TYPOGRAPHY_CONFIGS } from '@/constants/typography-configs.constant';
import { TypographyVariant } from '@/model/types/typography-variant.type';

const baseClassName = 'antialiased select-none';

type TypographyProps = {
	className?: string;

	as?: keyof JSX.IntrinsicElements;
	variant: TypographyVariant;
};

export default function ({ as, children, className, variant }: PropsWithChildren<TypographyProps>) {
	const { element, styles } = TYPOGRAPHY_CONFIGS[variant];

	const Component = as ?? element;
	return <Component className={clsx(baseClassName, styles, className)}>{children}</Component>;
}
