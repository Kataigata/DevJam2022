import { useContext, useRef } from 'react';
import SomethingIsPlayingContext from '../Context';

export default function MusicManager(): JSX.Element {
	const [
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		bassMuted,
		,
		drumsMuted,
		,
		keyboardMuted,
		,
		backingMuted,
		,
		leadMuted,
		,
		percussionMuted,
	] = useContext(SomethingIsPlayingContext);

	const bass = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/bass.mp3') : undefined
	);
	const drums = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/drums.mp3') : undefined
	);
	const keyboard = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/keyboard.mp3') : undefined
	);
	const backing = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/backing.mp3') : undefined
	);
	const lead = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/lead.mp3') : undefined
	);
	const percussion = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== 'undefined' ? new Audio('/sounds/percussion.mp3') : undefined
	);

	if (bass.current !== undefined) {
		bass.current.muted = bassMuted;
	}

	if (drums.current !== undefined) {
		drums.current.muted = drumsMuted;
	}

	if (keyboard.current !== undefined) {
		keyboard.current.muted = keyboardMuted;
	}

	if (backing.current !== undefined) {
		backing.current.muted = backingMuted;
	}

	if (lead.current !== undefined) {
		lead.current.muted = leadMuted;
	}

	if (percussion.current !== undefined) {
		percussion.current.volume = 0.4;
		percussion.current.muted = percussionMuted;
	}

	bass.current?.play();
	drums.current?.play();
	keyboard.current?.play();
	backing.current?.play();
	lead.current?.play();
	percussion.current?.play();

	return <></>;
}
