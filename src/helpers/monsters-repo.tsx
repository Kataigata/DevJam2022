const fs = require('fs');
let monsters = require('../data/monsters.json');
import { Monster } from 'utils/types';

export const monstersRepo = {
	getAll,
	getById: (id: number) => monsters.find((x: Monster) => x.id.toString() === id.toString()),
	find: (x: Monster) => monsters.find(x),
	create,
};

function getAll() {
	let returnMonsters: Monster[] = monsters;
	return returnMonsters;
}

function create(monster: Monster) {
	monster.id = monsters.length ? Math.max(...monsters.map((x: Monster) => x.id)) + 1 : 1;
	monsters.push(monster);
	saveData();
}

// function update(id: number, params) {
// 	const monster = monsters.find((x) => x.id.toString() === id.toString());
// 	Object.assign(monster, params);
// 	saveData();
// }

function saveData() {
	fs.writeFileSync('data/monsters.json', JSON.stringify(monsters, null, 4));
}

// async function readFile(monsters) {
// 	try {
// 		const data = await fs.readFile(monsters);

// 	}
// }
