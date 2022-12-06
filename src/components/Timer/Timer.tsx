import styles from './Timer.module.css';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

export default function Timer(): JSX.Element {
	const [context, , time, setTime] = useContext(SomethingIsPlayingContext);
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
		console.log(time);
	}

	if (context) {
		firstTimer();
	}

	return (
		<>
			<span>
				<p>{context.toString()}</p>
				<h1 className={styles.timer}>{time}</h1>
			</span>
		</>
	);
}
