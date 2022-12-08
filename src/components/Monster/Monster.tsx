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
			updateMusicState(false);

			let monsterToUpdate: MonsterProps = {
				id: props.id,
				name: props.name,
				picturePath: props.picturePath,
				soundPath: props.soundPath,
				playing: true,
			};

			updateMonster(monsterToUpdate);
		}

		function updateMonster(updatedMonster: MonsterProps | undefined) {
			if (props.id === 1) {
				setMonster(updatedMonster);
			} else if (props.id === 2) {
				setMonsterTwo(updatedMonster);
			} else if (props.id === 3) {
				setMonsterThree(updatedMonster);
			} else if (props.id === 4) {
				setMonsterFour(updatedMonster);
			} else if (props.id === 5) {
				setMonsterFive(updatedMonster);
			} else if (props.id === 6) {
				setMonsterSix(updatedMonster);
			}
		}

		function destroyMonster() {
			updateMusicState(true);
			if (props.id === 1) {
				setMonster('');
			} else if (props.id === 2) {
				setMonsterTwo('');
			} else if (props.id === 3) {
				setMonsterThree('');
			} else if (props.id === 4) {
				setMonsterFour('');
			} else if (props.id === 5) {
				setMonsterFive('');
			} else if (props.id === 6) {
				setMonsterSix('');
			}
		}

		function updateMusicState(muted: boolean) {
			if (props.soundPath === 'bass') {
				setBassMuted(muted);
			} else if (props.soundPath === 'drums') {
				setDrumsMuted(muted);
			} else if (props.soundPath === 'keyboard') {
				setKeyboardMuted(muted);
			} else if (props.soundPath === 'backing') {
				setBackingMuted(muted);
			} else if (props.soundPath === 'lead') {
				setLeadMuted(muted);
			} else if (props.soundPath === 'percussion') {
				setPercussionMuted(muted);
			}
		}

		function handleMonsterClick() {
			destroyMonster();
			//stop the music
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
