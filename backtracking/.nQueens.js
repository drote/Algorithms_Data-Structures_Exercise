

function nQueens(n) {
	let positions = [];
	if (helper(0, positions, n)) {
		print(positions);
		return;
	}

	return 'No placement found';
}

function helper(row, positions, n) {
	if (row >= n) return true;

	let initPos = {x: 0, y: row};

	while (true) {
		if (initPos.x >= n) return false;
		
		if (isSafe(initPos, positions)) {
			positions.push(initPos);
			
			let nextQueen = helper(row + 1, positions, n);

			if (nextQueen) {
				return true;
			} else {			
				initPos = positions.pop();
				initPos.x += 1;
			}

		} else {
			initPos.x += 1;
		}
	}
}

function isSafe(position, queens) {
	for (let i = 0; i < queens.length; i += 1) {
		if (unSafe(position, queens[i])) return false;
	}

	return true;
}

function unSafe(position, queen) {
	return 	position.y === queen.y
					|| position.x === queen.x
					|| position.x - position.y === queen.x - queen.y
					|| position.x + position.y === queen.x + queen.y;
}

function print(positions) {
	console.log(' _'.repeat(positions.length));

	positions.forEach((pos) => {
		console.log('|_'.repeat(pos.x) 
								+ '|Q' 
								+ '|_'.repeat(positions.length - pos.x - 1)
								+ '|');
	});
}
