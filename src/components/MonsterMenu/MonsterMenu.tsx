import styles from './MonsterMenu.module.css';
import MonsterPreview from 'src/components/MonsterPreview/MonsterPreview';
import { monsterPreviews } from '../../pages/api/data';
import { StyleRegistry } from 'styled-jsx';

export const getStaticProps = async () => {
	return {
		props: {
			monsterPreviews,
		},
	};
};

export default function MonsterMenu(): JSX.Element {
	return (
		<>
			<div className={styles.menu}>
				<span className={styles.title}>Select a monster</span>
				<div className={styles.selection}>
					{monsterPreviews.map((preview) => (
						<MonsterPreview
							key={preview.id}
							id={preview.id}
							name={preview.name}
							picturePath={preview.picturePath}
							soundPath={preview.soundPath}
							playing={false}
						></MonsterPreview>
					))}
				</div>
			</div>
		</>
	);
}
