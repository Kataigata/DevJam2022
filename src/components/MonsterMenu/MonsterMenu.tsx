import styles from './MonsterMenu.module.css';
import MonsterPreview from 'src/components/MonsterPreview/MonsterPreview';
import { monsterPreviews } from '../../pages/api/data';

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
				<h2>Select a monster</h2>
				<section>
					{monsterPreviews.map((preview) => (
						<MonsterPreview
							key={preview.id}
							id={preview.id}
							name={preview.name}
							picturePath={preview.picturePath}
							soundPath={preview.soundPath}
						></MonsterPreview>
					))}
				</section>
			</div>
		</>
	);
}
