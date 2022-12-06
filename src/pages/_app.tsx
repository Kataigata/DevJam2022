import '../styles/base.css';
import '../styles/utils.css';

import type { AppProps } from 'next/app';
import SomethingIsPlayingContext from 'src/components/Context';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [context, setContext] = useState(false);
	const [time, setTime] = useState(0.01);
	return (
		<SomethingIsPlayingContext.Provider value={[context, setContext, time, setTime]}>
			<Component {...pageProps} />
		</SomethingIsPlayingContext.Provider>
	);
}
