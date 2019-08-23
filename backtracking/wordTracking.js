// check if word exists on board

function exist(board, word) {
  let res = false;
  let coords = {};
  let accWord = '';
  for (let i = 0; i < board.length; i += 1) {
  	for (let j = 0; j < board[0].length; j += 1) {
  		let res = helper(board, accWord, word, coords, [i, j]);
  		if (res) return res;
  	}
  }

  return res;
};

let direction = {}

direction['0'] = function(coords) {
	return [coords[0], coords[1] + 1];
}

direction['1'] = function(coords) {
	return [coords[0], coords[1] - 1];
}

direction['2'] = function(coords) {
	return [coords[0] + 1, coords[1]];
}

direction['3'] = function(coords) {
	return [coords[0] - 1, coords[1]];
}

function validCoords(board, coords, nextCoords) {
	return !coords[nextCoords] && board[nextCoords[0]] && board[nextCoords[0]][nextCoords[1]];
}

function helper(board, accWord, word, coords, nextCoords) {
	if (accWord === word) {
		return true;
	};

	if (accWord.length > 0 && accWord !== word.slice(0, accWord.length)) {
		return false;
	} else if (accWord.length < word.length) {

		if (validCoords(board, coords, nextCoords)) {
			for (let i = 0; i < 4; i += 1) {
				coords[nextCoords] = true;
				accWord += board[nextCoords[0]][nextCoords[1]];
				
				let res = helper(board, accWord, word, coords, direction[i](nextCoords));
				
				if (res) return true;

				coords[nextCoords] = false;
				accWord = accWord.slice(0, -1);
			}
		}
	}
}

let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(board, 'SEEA'));