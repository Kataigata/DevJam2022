import styles from './Timer.module.css';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

export default function Timer(): JSX.Element {
	const [context, , time, setTime] = useContext(SomethingIsPlayingContext);
	const fullTime = 423000000;
	let interval;

	if (context) {
		if (time === fullTime || time > fullTime) {
			setTime(0);
		} else {
			interval = setInterval(() => {
				setTime((prevTime: number) => prevTime + 10);
			}, 10);
		}
	}

	return (
		<>
			<span>
				<h1 className={styles.timer}>{time}</h1>
			</span>
		</>
	);
}
