import Image from 'next/image';
import React, { useRef } from 'react';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';

type MonsterProps = {
	id: number;
	name: string;
	picturePath: string;
	soundPath: string;
	playing: boolean;
};

export default function RealMonster(props: MonsterProps): JSX.Element {
	const [
		context,
		setContext,
		time,
		,
		,
		setMonster,
		,
		setMonsterTwo,
		,
		setMonsterThree,
		,
		setMonsterFour,
	] = useContext(SomethingIsPlayingContext);

	if (props.name !== null && props.name !== undefined) {
		const roar = useRef<HTMLAudioElement | undefined>(
			typeof Audio !== 'undefined' ? new Audio(props.soundPath) : undefined
		);

		const handleMonsterClick = async () => {
			if (props.playing) {
				updateMonsterPlaying(false);
				roar.current?.pause();
			} else {
				if (!context) {
					setContext(true);
				}
				updateMonsterPlaying(true);
				if (roar.current !== undefined) {
					roar.current.currentTime = time / 1000000;
				}
				roar.current?.play();
			}
		};

		function updateMonsterPlaying(playing: boolean) {
			let monsterToUpdate: MonsterProps = {
				id: props.id,
				name: props.name,
				picturePath: props.picturePath,
				soundPath: props.soundPath,
				playing: playing,
			};

			if (props.id === 1) {
				setMonster(monsterToUpdate);
			} else if (props.id === 2) {
				setMonsterTwo(monsterToUpdate);
			} else if (props.id === 3) {
				setMonsterThree(monsterToUpdate);
			} else if (props.id === 4) {
				setMonsterFour(monsterToUpdate);
			}
		}

		return (
			<>
				<span>
					{props.name} : {roar.current?.currentTime}
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
