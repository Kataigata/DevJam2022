import Image from 'next/image';
import styles from './MonsterPreview.module.css';
import { MonsterProps } from 'utils/types';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

type MonsterPreviewProps = {
	id: number;
	name: string;
	picturePath: string;
	soundPath: string;
	playing: boolean;
};

export default function MonsterPreview(props: MonsterPreviewProps): JSX.Element {
	const [
		,
		,
		,
		,
		monster,
		setMonster,
		monsterTwo,
		setMonsterTwo,
		monsterThree,
		setMonsterThree,
		monsterFour,
		setMonsterFour,
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
		setMonsterFive,
		monsterSix,
		setMonsterSix,
	] = useContext(SomethingIsPlayingContext);

	function handlePreviewClick() {
		let selectedMonster: MonsterProps = {
			id: 1,
			name: props.name,
			picturePath: props.picturePath,
			soundPath: props.soundPath,
		};

		if (monster === null || monster === undefined || monster === '') {
			setMonster(selectedMonster);
		} else if (monsterTwo === null || monsterTwo === undefined || monsterTwo === '') {
			selectedMonster.id = 2;
			setMonsterTwo(selectedMonster);
		} else if (monsterThree === null || monsterThree === undefined || monsterThree === '') {
			selectedMonster.id = 3;
			setMonsterThree(selectedMonster);
		} else if (monsterFour === null || monsterFour === undefined || monsterFour === '') {
			selectedMonster.id = 4;
			setMonsterFour(selectedMonster);
		} else if (monsterFive === null || monsterFive === undefined || monsterFive === '') {
			selectedMonster.id = 5;
			setMonsterFive(selectedMonster);
		} else if (monsterSix === null || monsterSix === undefined || monsterSix === '') {
			selectedMonster.id = 6;
			setMonsterSix(selectedMonster);
		}
	}

	return (
		<>
			<span>
				<Image
					src={props.picturePath}
					width={75}
					height={80}
					alt="Image of monster"
					onClick={() => {
						handlePreviewClick();
					}}
					className={styles.preview}
				/>
			</span>
		</>
	);
}
