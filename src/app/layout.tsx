import { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';

import Container from '@/components/Container';
import Header from '@/components/Header';

import '@/styles/globals.css';

const bricolageGrotesque = Bricolage_Grotesque({
	variable: '--bricolage-grotesque',

	subsets: ['latin'],
});

const dmSans = DM_Sans({
	variable: '--dm-sans',

	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Weather App',
};

export default function ({ children }: LayoutProps<'/'>) {
	return (
		<html className={`${bricolageGrotesque.variable} ${dmSans.variable} bg-neutral-900`}>
			<body>
				<Container>
					<Header />

					<>{children}</>
				</Container>
			</body>
		</html>
	);
}
