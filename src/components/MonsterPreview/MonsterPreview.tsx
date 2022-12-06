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
};

export default function MonsterPreview(props: MonsterPreviewProps): JSX.Element {
	const [, , , , , setMonster] = useContext(SomethingIsPlayingContext);

	function handlePreviewClick() {
		let selectedMonster: MonsterProps = {
			id: 1,
			name: props.name,
			picturePath: props.picturePath,
			soundPath: props.soundPath,
		};

		setMonster(selectedMonster);
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
