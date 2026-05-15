import { TypographyConfig } from '@/model/types/typography-config.type';
import { TypographyVariant } from '@/model/types/typography-variant.type';

export const TYPOGRAPHY_CONFIGS: Record<TypographyVariant, TypographyConfig> = {
	'preset-1': {
		element: 'h1',
		styles: 'font-dm-sans text-[96px]/[100%] font-semibold tracking-[-2px]',
	},

	'preset-2': {
		element: 'h2',
		styles: 'font-bricolage-grotesque text-[52px]/[120%] font-bold tracking-normal',
	},

	'preset-3': {
		element: 'p',
		styles: 'font-dm-sans text-[32px]/[100%] font-light tracking-normal',
	},

	'preset-4': {
		element: 'p',
		styles: 'font-dm-sans text-[28px]/[120%] font-bold tracking-normal',
	},

	'preset-5': {
		element: 'p',
		styles: 'font-dm-sans text-[20px]/[120%] tracking-normal',
	},

	'preset-6': {
		element: 'p',
		styles: 'font-dm-sans text-[18px]/[120%] font-medium tracking-normal',
	},

	'preset-7': {
		element: 'p',
		styles: 'font-dm-sans text-[16px]/[120%] font-medium tracking-normal',
	},

	'preset-8': {
		element: 'p',
		styles: 'font-dm-sans text-[14px]/[120%] font-medium tracking-normal',
	},
};
