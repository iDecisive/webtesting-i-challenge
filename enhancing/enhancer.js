module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement === 20) {
		return "You're already level 20!";
	} else {
		return {
			...item,
			enhancement: item.enhancement + 1,
		};
	}
}

function fail(item) {
	let newItem = { ...item };

	switch (true) {
		case item.enhancement < 15:
			newItem = {
				...newItem,
				durability: item.durability - 5,
      };
      break;

		case item.enhancement >= 15:
			newItem = {
				...newItem,
				durability: item.durability - 10,
      };
      break;
  }
  
  if (item.enhancement > 16) {
    newItem = {
      ...newItem,
      enhancement: item.enhancement - 1
    }
	}

	return {
		...newItem,
	};
}

function repair(item) {
	return {
    ...item,
    durability: 100
  };
}

function get(item) {
	return { ...item };
}

//Example usage

let axe = {
  name: 'axe',
  enhancement: 20,
  durability: 50
}

console.log(
	'Success Output:',
	success(axe)
);

console.log(
	'Fail Output: ',
	fail(axe)
);

console.log('Repair output:', repair(axe))
