import Head from 'next/head';
import Timer from 'src/components/Timer/Timer';
import { monsters } from '../pages/api/data';
import Monster from 'src/components/Monster/Monster';

export const getStaticProps = async () => {
	return {
		props: {
			monsters,
		},
	};
};

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Next TypeScript Starter</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Timer></Timer>

			<main className="main">
				<h1 className="title">Musical Monsters</h1>

				<section className="grid">
					{monsters.map((monster) => (
						<Monster
							id={monster.id}
							name={monster.name}
							picturePath={monster.picturePath}
							soundPath={monster.soundPath}
						></Monster>
					))}
				</section>
			</main>
		</div>
	);
}

// export async function getServerSideProps() {
// 	const res = await fetch('monsters.json' as string);
// 	const monsters = await res.json();

// 	return {
// 		props: { monsters },
// 	};
// }
