import Image from 'next/image';
import Monster from '../Monster/Monster';
import styles from './MonsterPreview.module.css';

type MonsterPreviewProps = {
	id: number;
	picturePath: string;
	soundPath: string;
};

export default function MonsterPreview(props: MonsterPreviewProps): JSX.Element {
	let clickedName = '';

	const handlePreviewClick = async () => {
		//add monster to data file
		//reload the playzone component
	};

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
