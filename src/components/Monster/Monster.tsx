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
		,
		setBassMuted,
		,
		setDrumsMuted,
		,
		setKeyboardMuted,
		,
		setBackingMuted,
		,
		setLeadMuted,
		,
		setPercussionMuted,
		,
		setMonsterFive,
		,
		setMonsterSix,
	] = useContext(SomethingIsPlayingContext);

	if (props.name !== null && props.name !== undefined) {
		if (!props.playing) {
			updateMonsterPlaying(true);
			if (props.soundPath === 'bass') {
				setBassMuted(false);
			} else if (props.soundPath === 'drums') {
				setDrumsMuted(false);
			} else if (props.soundPath === 'keyboard') {
				setKeyboardMuted(false);
			} else if (props.soundPath === 'backing') {
				setBackingMuted(false);
			} else if (props.soundPath === 'lead') {
				setLeadMuted(false);
			} else if (props.soundPath === 'percussion') {
				setPercussionMuted(false);
			}
		}

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
			} else if (props.id === 5) {
				setMonsterFive(monsterToUpdate);
			} else if (props.id === 6) {
				setMonsterSix(monsterToUpdate);
			}
		}

		return (
			<>
				<span>
					{props.name}
					<Image
						src={props.picturePath}
						width={100}
						height={100}
						alt="Image of monster"
						style={{ cursor: 'pointer' }}
					/>
				</span>
			</>
		);
	} else {
		return <></>;
	}
}
