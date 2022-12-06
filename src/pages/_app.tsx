import '../styles/base.css';
import '../styles/utils.css';

import type { AppProps } from 'next/app';
import SomethingIsPlayingContext from 'src/components/Context';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [context, setContext] = useState(false);
	const [time, setTime] = useState(0.01);
	const [monster, setMonster] = useState('');
	const [monsterTwo, setMonsterTwo] = useState('');
	const [monsterThree, setMonsterThree] = useState('');
	const [monsterFour, setMonsterFour] = useState('');
	return (
		<SomethingIsPlayingContext.Provider
			value={[
				context,
				setContext,
				time,
				setTime,
				monster,
				setMonster,
				monsterTwo,
				setMonsterTwo,
				monsterThree,
				setMonsterThree,
				monsterFour,
				setMonsterFour,
			]}
		>
			<Component {...pageProps} />
		</SomethingIsPlayingContext.Provider>
	);
}
