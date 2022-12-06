import Image from 'next/image';
import React, { useRef } from 'react';
import { useContext } from 'react';
import SomethingIsPlayingContext from '../Context';
import styles from './Monster.module.css';

type MonsterProps = {
	id: number;
	name: string;
	picturePath: string;
	soundPath: string;
};

export default function Monster(props: MonsterProps): JSX.Element {
	const { soundPath } = props;
	let playing = false;
	const [context, setContext, time] = useContext(SomethingIsPlayingContext);

	const roar = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio(soundPath) : undefined
	);

	const handleMonsterClick = async () => {
		if (playing) {
			playing = false;
			setContext(playing);
			roar.current?.pause();
		} else {
			playing = true;
			setContext(playing);
			if (roar !== undefined && roar.current !== null && roar.current !== undefined) {
				roar.current.currentTime = time;
			}
			roar.current?.play();
		}
	};

	return (
		<>
			<div>
				<p>
					{props.name} {time}
				</p>
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
			</div>
		</>
	);
}
