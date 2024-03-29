import SomethingIsPlayingContext from '../Context';
import { useContext } from 'react';
import Monster from '../Monster/Monster';
import styles from './SelectedScreen.module.css';

export default function SelectedScreen(): JSX.Element {
	const [
		,
		,
		,
		,
		monster,
		,
		monsterTwo,
		,
		monsterThree,
		,
		monsterFour,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		monsterFive,
		,
		monsterSix,
	] = useContext(SomethingIsPlayingContext);

	return (
		<>
			<div className={styles.grid}>
				<Monster
					id={monster.id}
					name={monster.name}
					picturePath={monster.picturePath}
					soundPath={monster.soundPath}
					playing={monster.playing}
				></Monster>
				<Monster
					id={monsterTwo.id}
					name={monsterTwo.name}
					picturePath={monsterTwo.picturePath}
					soundPath={monsterTwo.soundPath}
					playing={monsterTwo.playing}
				></Monster>
				<Monster
					id={monsterThree.id}
					name={monsterThree.name}
					picturePath={monsterThree.picturePath}
					soundPath={monsterThree.soundPath}
					playing={monsterThree.playing}
				></Monster>
				<Monster
					id={monsterFour.id}
					name={monsterFour.name}
					picturePath={monsterFour.picturePath}
					soundPath={monsterFour.soundPath}
					playing={monsterFour.playing}
				></Monster>
				<Monster
					id={monsterFive.id}
					name={monsterFive.name}
					picturePath={monsterFive.picturePath}
					soundPath={monsterFive.soundPath}
					playing={monsterFive.playing}
				></Monster>
				<Monster
					id={monsterSix.id}
					name={monsterSix.name}
					picturePath={monsterSix.picturePath}
					soundPath={monsterSix.soundPath}
					playing={monsterSix.playing}
				></Monster>
			</div>
		</>
	);
}
