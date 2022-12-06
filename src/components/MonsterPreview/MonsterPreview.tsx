import Image from 'next/image';
import styles from './MonsterPreview.module.css';
import { monstersRepo } from '../../helpers/monsters-repo';
import { Monster } from 'utils/types';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

type MonsterPreviewProps = {
	id: number;
	name: string;
	picturePath: string;
	soundPath: string;
};

export default function MonsterPreview(props: MonsterPreviewProps): JSX.Element {
	const [context, setContext, time, setTime, selectedMonsters, setSelectedMonster] =
		useContext(SomethingIsPlayingContext);

	function handlePreviewClick() {
		let selectedMonster: Monster = {
			id: 1,
			name: props.name,
			picturePath: props.picturePath,
			soundPath: props.soundPath,
		};
		let currentMonsterList: Monster[] = selectedMonsters;
		currentMonsterList.push(selectedMonster);
		setSelectedMonster(currentMonsterList);
	}

	return (
		<>
			<span>
				<Image
					src={props.picturePath}
					width={100}
					height={100}
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
