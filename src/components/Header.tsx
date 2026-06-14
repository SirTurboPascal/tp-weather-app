'use client';

import { useState } from 'react';

import Divider from '@/components/Divider';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import MenuButton from '@/components/MenuButton';
import UnitSwitcher from '@/components/UnitSwitcher';
import UnitSystemSwitcher from '@/components/UnitSystemSwitcher';

export default function () {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const menu = (
		<Menu onClickAway={() => setMenuOpen(false)}>
			<UnitSystemSwitcher />
			<UnitSwitcher label='Temperature' quantity='temperature' />
			<Divider />

			<UnitSwitcher label='Wind Speed' quantity='wind_speed' />
			<Divider />

			<UnitSwitcher label='Precipitation' quantity='precipitation' />
		</Menu>
	);

	return (
		<header className='flex items-center justify-between'>
			<Logo />

			<MenuButton menu={menu} menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
		</header>
	);
}
