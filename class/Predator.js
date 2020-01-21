class Predator {
	constructor(x, y, index) {
		this.x = x,
		this.y = y,
		this.index = index;
		this.energy = 5
		this.directions = [];
	}
	getNewCoordinates() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	chooseCell(character) {
		this.getNewCoordinates();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	chooseCell2(character,character2) {
		this.getNewCoordinates();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character || matrix[y][x] == character2) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	move() {

		let emptyCells = this.chooseCell(0);
		let newCell = random(emptyCells);

		if (newCell) {

			let newX = newCell[0];
			let newY = newCell[1];

			matrix[newY][newX] = this.index
			matrix[this.y][this.x] = 0;


			this.x = newX;
			this.y = newY;
			this.energy--;
		}

	}
	eat() {
		let emptyCells = this.chooseCell(1,2);
		let uteliq = random(emptyCells);

		if (uteliq) {


			let newX = uteliq[0];
			let newY = uteliq[1];

			matrix[newY][newX] = this.index;
			matrix[this.y][this.x] = 0;



				for (let i in grassArr) {
					if (newX === grassArr[i].x && newY === grassArr[i].y) {
						grassArr.splice(i, 1);
						break;
					}
				}
	  
				for (let i in grasseaterArr) {
					if (newX === grasseaterArr[i].x && newY === grasseaterArr[i].y) {
						grasseaterArr.splice(i, 1);
						break;
					}
				}
			
		  
			this.x = newX;
			this.y = newY;
			this.energy += 2
		}
	}
	mul() {

		var newCell = random(this.chooseCell(0));

		if (this.energy >= 6 && newCell) {

			var newPredator = new Predator(newCell[0], newCell[1], this.index);
			predatorArr.push(newPredator);
			matrix[newCell[1]][newCell[0]] = this.index;
			this.energy = 5;
		}
	}

	die() {
		if (this.energy <= 0) {
			matrix[this.y][this.x] = 0;
			for (var i in predatorArr) {
				if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
					predatorArr.splice(i, 1);
				}
			}
		}
	}
}