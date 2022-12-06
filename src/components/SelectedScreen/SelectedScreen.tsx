import SomethingIsPlayingContext from '../Context';
import { useContext } from 'react';
import Monster from '../Monster/Monster';

export default function SelectedScreen(): JSX.Element {
	const [, , , , monster] = useContext(SomethingIsPlayingContext);

	return (
		<>
			<div>
				<h2>Monster:</h2>
				<Monster
					id={monster.id}
					name={monster.name}
					picturePath={monster.picturePath}
					soundPath={monster.soundPath}
				></Monster>
			</div>
		</>
	);
}
