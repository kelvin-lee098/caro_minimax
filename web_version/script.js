  /*Code of Minmax here*/

// var board = new Array(20)
// for(let i = 0; i < 20; i++){
// 	board[i] = new Array(20)
// 	for(let j = 0; j < 20; j++){
// 		board[i][j] = 0
// 	}
// }

var board = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

var HUMAN = -1;
var COMP = +1;

/* Function to heuristic evaluation of state. */
function evalute(state) {
	var score = 0;

	if (gameOver(state, COMP)) {
		score = +1;
	}
	else if (gameOver(state, HUMAN)) {
		score = -1;
	} else {
		score = 0;
	}

	return score;
}

/* This function tests if a specific player wins */
function gameOver(state, player) {
	for (let i = 0; i < 20; i++ ) {
		for (let j = 0; j < 20; j++) {
			// trong dau
			if ((state[i][j] == 0) && (state[i+1][j] == player) && (state[i+2][j] == player) && (state[i+3][j] == player) && (state[i+4][j] == player) && (state[i+5][j] == player))
			return true
			
			if ((state[i][j] == 0) && (state[i][j+1] == player) && (state[i][j+2] == player) && (state[i][j+3] == player) && (state[i][j+4] == player) && (state[i][j+5] == player))
			return true

			if ((state[i][j] == 0) && (state[i+1][j+1] == player) && (state[i+2][j+2] == player) && (state[i+3][j+3] == player) && (state[i+4][j+4] == player) && (state[i+5][j+5] == player))
			return true
		 // trong cuoi
			 if ((state[i][j] == player) && (state[i+1][j] == player) && (state[i+2][j] == player) && (state[i+3][j] == player) && (state[i+4][j] == player) && (state[i+5][j] == 0))
			 return true

			 if( (state[i][j] == player) && (state[i][j+1] == player) && (state[i][j+2] == player) && (state[i][j+3] == player) && (state[i][j+4] == player) && (state[i][j+5] == 0))
			 return true
			 if ((state[i][j] == player) && (state[i+1][j+1] == player) && (state[i+2][j+2] == player) && (state[i+3][j+3] == player) && (state[i+4][j+4] == player) && (state[i+5][j+5] == 0))
			 return true
		 }
	 }
	 return false
}

/* This function test if the human or computer wins */
function gameOverAll(state) {
	return gameOver(state, HUMAN) || gameOver(state, COMP);
}

function emptyCells(state) {
	var cells = [];
	for (var x = 0; x < 20; x++) {
		for (var y = 0; y < 20; y++) {
			if (state[x][y] === 0)
				cells.push([x, y]);
		}
	}

	return cells;
}

/* A move is valid if the chosen cell is empty */
function validMove(x, y) {
	var empties = emptyCells(board);
	try {
		if (board[x][y] === 0) {
			return true;
		}
		else {
			return false;
		}
	} catch (e) {
		return false;
	}
}

/* Set the move on board, if the coordinates are valid */
function setMove(x, y, player) {
	if (validMove(x, y)) {
		board[x][y] = player;
		return true;
	}
	else {
		return false;
	}
}

/* *** AI function that choice the best move *** */
// Read more on https://github.com/Cledersonbc/tic-tac-toe-minimax/
function minimax(state, depth, player) {
	var best;

	if (player === COMP) {
		best = [-1, -1, -1000];
	}
	else {
		best = [-1, -1, +1000];
	}

	if (depth === 0 || gameOverAll(state)) {
		var score = evalute(state);
		return [-1, -1, score];
	}

	emptyCells(state).forEach(function (cell) {
		var x = cell[0];
		var y = cell[1];
		state[x][y] = player;
		var score = minimax(state, depth - 1, -player);
		state[x][y] = 0;
		score[0] = x;
		score[1] = y;

		if (player === COMP) {
			if (score[2] > best[2])
				best = score;
		}
		else {
			if (score[2] < best[2])
				best = score;
		}
	});

	return best;
}

/* It calls the minimax function */
function aiTurn() {
	var x, y;
	var move;
	var cell;

	if (emptyCells(board).length === 400) {
		x = parseInt(Math.random() * 20);
		y = parseInt(Math.random() * 20);
	}
	else {
		move = minimax(board, emptyCells(board).length, COMP);
		x = move[0];
		y = move[1];
	}

	if (setMove(x, y, COMP)) {
		console.log(x, '-', y)
		cell = document.getElementById(String(x) + " " + String(y));
		cell.innerHTML = "O";
	}
}

/* main */
function clickedCell(cell) {
	var button = document.getElementById("bnt-restart");
	button.disabled = true;
	var conditionToContinue = gameOverAll(board) === false && emptyCells(board).length > 0;

	if (conditionToContinue === true) {
		var x = cell.id.split("")[0];
		var y = cell.id.split("")[1];
		var move = setMove(x, y, HUMAN);
		console.log(move)
		if (move == true) {
			cell.innerHTML = "X";
			if (conditionToContinue)
				aiTurn();
		}
	}
	if (gameOver(board, COMP)) {
		var lines;
		var cell;
		var msg;

		if (board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1)
			lines = [[0, 0], [0, 1], [0, 2]];
		else if (board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1)
			lines = [[1, 0], [1, 1], [1, 2]];
		else if (board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1)
			lines = [[2, 0], [2, 1], [2, 2]];
		else if (board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1)
			lines = [[0, 0], [1, 0], [2, 0]];
		else if (board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1)
			lines = [[0, 1], [1, 1], [2, 1]];
		else if (board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1)
			lines = [[0, 2], [1, 2], [2, 2]];
		else if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1)
			lines = [[0, 0], [1, 1], [2, 2]];
		else if (board[2][0] == 1 && board[1][1] == 1 && board[0][2] == 1)
			lines = [[2, 0], [1, 1], [0, 2]];

		for (var i = 0; i < lines.length; i++) {
			cell = document.getElementById(String(lines[i][0]) +" "+ String(lines[i][1]));
			cell.style.color = "red";
		}

		msg = document.getElementById("message");
		msg.innerHTML = "You lose!";
	}
	if (emptyCells(board).length == 0 && !gameOverAll(board)) {
		var msg = document.getElementById("message");
		msg.innerHTML = "Draw!";
	}
	if (gameOverAll(board) == true || emptyCells(board).length == 0) {
		button.value = "Restart";
		button.disabled = false;
	}
}

/* Restart the game*/
function restartBnt(button) {
	if (button.value == "Start AI") {
		aiTurn();
		button.disabled = true;
	}
	else if (button.value == "Restart") {
		var htmlBoard;
		var msg;

		for (var x = 0; x < 20; x++) {
			for (var y = 0; y < 20; y++) {
				board[x][y] = 0;
				htmlBoard = document.getElementById(String(x) + " " + String(y));
				htmlBoard.style.color = "#444";
				htmlBoard.innerHTML = "";
			}
		}
		button.value = "Start AI";
		msg = document.getElementById("message");
		msg.innerHTML = "";
	}
}
