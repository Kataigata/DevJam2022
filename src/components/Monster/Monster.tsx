import Image from 'next/image';
import React from 'react';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

type MonsterProps = {
	id: number;
	name: string;
	picturePath: string;
	soundPath: string;
};

export default function RealMonster(props: MonsterProps): JSX.Element {
	let playing = false;
	const [, setContext, time] = useContext(SomethingIsPlayingContext);
	let showMonster = false;

	if (props.name !== null && props.name !== undefined) {
		showMonster = true;
	}

	const handleMonsterClick = async () => {
		const roar = new Audio(props.soundPath);

		if (playing) {
			playing = false;
			setContext(playing);
			roar.pause();
		} else {
			playing = true;
			setContext(playing);
			if (roar !== undefined && roar !== null) {
				roar.currentTime = time;
			}
			roar.play();
		}
	};

	if (showMonster) {
		return (
			<>
				<span>
					{props.name}
					<Image
						src={props.picturePath}
						width={100}
						height={100}
						alt="Image of monster"
						onClick={() => {
							handleMonsterClick();
						}}
						style={{ cursor: 'pointer' }}
					/>
				</span>
			</>
		);
	} else {
		return <></>;
	}
}
