import { useContext, useRef } from 'react';
import SomethingIsPlayingContext from '../Context';

export default function MusicManager(): JSX.Element {
	const [, , , , , , , , , , , , bassMuted, , drumsMuted, , otherMuted, , vocalsMuted] =
		useContext(SomethingIsPlayingContext);

	const bass = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/bass.mp3') : undefined
	);
	const drums = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/drums.mp3') : undefined
	);
	const other = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/keyboard.mp3') : undefined
	);

	if (bass.current !== undefined) {
		bass.current.muted = bassMuted;
	}

	if (drums.current !== undefined) {
		drums.current.muted = drumsMuted;
	}

	if (other.current !== undefined) {
		other.current.muted = otherMuted;
	}

	bass.current?.play();
	drums.current?.play();
	other.current?.play();

	return <></>;
}
