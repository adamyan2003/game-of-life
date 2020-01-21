class Joker {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.index = index;
		this.directions = [];
	}
	getNewCoordinates(){
		this.directions = [
		 [this.x - 1, this.y - 1],
		 [this.x    , this.y - 1],
		 [this.x + 1, this.y - 1],
		 [this.x - 1, this.y    ],
		 [this.x + 1, this.y    ],
		 [this.x - 1, this.y + 1],
		 [this.x    , this.y + 1],
		 [this.x + 1, this.y + 1],
		 
		];
	 }
 
	chooseCell(character,character1) {
	   this.getNewCoordinates();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character || matrix[y][x]== character1){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	move() {

		let newCell = random((this.chooseCell)(0,1));

		if(newCell) {

			let newX = newCell[0];
			let newY = newCell[1];

				if(matrix[newY][newX] == 0){
				matrix[this.y][this.x] = 0;
				matrix[newY][newX] = this.index
				}
				if(matrix[newY][newX] == 1){
					matrix[this.y][this.x] = 1;
					matrix[newY][newX] = this.index
					}
					if(matrix[newY][newX] == 2){
						matrix[this.y][this.x] = 2;
						matrix[newY][newX] = this.index
						}
				
			this.x = newX;
			this.y = newY;
			this.energy--;

		}
		
	}
	eat() {
		let emptyCells = this.chooseCell(1,3);
		let predator = random(emptyCells);

		if(predator){
			let newX = predator[0];
			let newY = predator[1];

			matrix[newY][newX] = this.index;
			matrix[this.y][this.x] = 0;

			for(let i in predatorArr) {
				if(newX === predatorArr[i].x && newY === predatorArr[i].y) {
					predatorArr.splice(i,1);
					break;
				}
			}


			this.x = newX;
			this.y = newY;
			this.energy+=2   
		}   
	}
	mul() {
  
		var newCell = random(this.chooseCell(0));

		if (this.energy >=6  && newCell) {
			
			var newJoker = new Joker(newCell[0], newCell[1], this.index);
			JokerArr.push(newJoker);
			matrix[newCell[1]][newCell[0]] = this.index;
			this.energy = 5;
		}
	}
	die() {
		if (this.energy <= 0) {
			matrix[this.y][this.x] = 0;
			for (var i in JokerArr) {
				if (this.x == JokerArr[i].x && this.y == JokerArr[i].y) {
					JokerArr.splice(i, 1);
				}
			}
		}
	}
   
}