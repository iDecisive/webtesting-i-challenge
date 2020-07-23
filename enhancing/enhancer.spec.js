const enhancer = require('./enhancer.js');

// test away!

test('Success output', () => {
	//Setup

	let axe = {
		name: 'axe',
		enhancement: 20,
		durability: 50,
	};

	let expectedValue = "You're already level 20!";

	//Execute code

	let actual = enhancer.success(axe);

	//Assert results

	expect(actual).toBe(expectedValue);
});

test('Repair output', () => {
	//Setup

	let axe = {
		name: 'axe',
		enhancement: 20,
		durability: 50,
	};

	let expectedValue = {
		name: 'axe',
		enhancement: 20,
		durability: 100,
	};

	//Execute code

	let actual = enhancer.repair(axe);

	//Assert results

	expect(actual).toStrictEqual(expectedValue);
});

test('Fail output', () => {
	//Setup

	let axe = {
		name: 'axe',
		enhancement: 20,
		durability: 50,
	};

	let expectedValue = {
		name: 'axe',
		enhancement: 19,
		durability: 40,
	};

	//Execute code

	let actual = enhancer.fail(axe);

    //Assert results

	expect(actual).toStrictEqual(expectedValue);
});