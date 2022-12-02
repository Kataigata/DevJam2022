import Image from 'next/image';
import React, { useRef } from 'react';
import { cursorTo } from 'readline';

type MonsterProps = {
	name: string;
	picturePath: string;
	soundPath: string;
};

export default function Monster(props: MonsterProps): JSX.Element {
	const { soundPath } = props;
	let playing = false;

	const roar = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio(soundPath) : undefined
	);

	const handleMonsterClick = async () => {
		if (playing) {
			roar.current?.pause();
			playing = false;
		} else {
			roar.current?.play();
			playing = true;
		}
	};

	return (
		<>
			<div>
				<p>{props.name}</p>
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
