import '../styles/base.css';
import '../styles/utils.css';

import type { AppProps } from 'next/app';
import SomethingIsPlayingContext from 'src/components/Context';
import { useState } from 'react';
import { Monster } from 'utils/types';

export default function App({ Component, pageProps }: AppProps) {
	const [context, setContext] = useState(false);
	const [time, setTime] = useState(0.01);
	const selectedMonstersType: Monster[] = [];
	const [selectedMonsters, setSelectedMonster] = useState(selectedMonstersType);
	return (
		<SomethingIsPlayingContext.Provider
			value={[context, setContext, time, setTime, selectedMonsters, setSelectedMonster]}
		>
			<Component {...pageProps} />
		</SomethingIsPlayingContext.Provider>
	);
}
