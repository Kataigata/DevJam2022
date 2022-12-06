import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';
import { Monster } from 'utils/types';

export default function MList(): JSX.Element {
	const [selectedMonsters, setSelectedMonster] = useContext(SomethingIsPlayingContext);

	function addMonster() {
		let selectedMonster: Monster = {
			id: 1,
			name: 'props.name',
			picturePath: '/images/Pink.png',
			soundPath: '/sounds/bass.mp3',
		};
		let currentMonsterList: Monster[] = selectedMonsters;
		currentMonsterList.push(selectedMonster);
		setSelectedMonster(currentMonsterList);
		console.log('monsters:', selectedMonsters);
	}

	return (
		<>
			<span>
				<h1
					onClick={() => {
						addMonster();
					}}
				>
					click me
				</h1>
				{selectedMonsters.map(
					(monster: { id: number; name: string; picturePath: string; soundPath: string }) => (
						<p>{monster.name}</p>
					)
				)}
			</span>
		</>
	);
}
