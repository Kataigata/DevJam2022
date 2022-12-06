import styles from './Timer.module.css';
import { useContext, useState } from 'react';
import SomethingIsPlayingContext from '../Context';

export default function Timer(): JSX.Element {
	const [context, setContext, time, setTime] = useContext(SomethingIsPlayingContext);
	const fullTime = 4.23;

	function incrementTime() {
		if (time === fullTime) {
			setTime(0.01);
		} else {
			setTime(time + 0.01);
		}
	}

	function firstTimer() {
		setInterval(incrementTime, 1000);
	}

	if (context) {
		firstTimer();
	}

	return (
		<>
			<span>
				<p>{context.toString()}</p>
				<h1 id="timer" className={styles.timer}>
					{time}
				</h1>
			</span>
		</>
	);
}
