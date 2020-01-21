
let matrix = [];
var side = 10;
var grassArr = [];
var grasseaterArr = [];     
var predatorArr = [];
var JokerArr = [];
var wolfArr = [];


function setup() {

    for (var i = 0;i<70;i++){
        matrix[i] =[];
        for(var j = 0;j<70;j++){
        matrix[i][j] = (random([0,1,2,3,4,5]));
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');  


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
               else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grasseaterArr.push(ge);

            }  else if (matrix[y][x] == 3) {
                var pe = new Predator(x, y, 3)
                predatorArr.push(pe);

            }
             else if (matrix[y][x] == 4) {
             var jok = new Joker(x, y, 4)
             JokerArr.push(jok);
            }
              else if (matrix[y][x] == 5) {
              var wol = new Wolf(x, y, 5)
               wolfArr.push(wol);
            }
        }
      }


    }
 function draw(){

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            
             else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
              else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
              }
        }
     } 

    for (var i in grassArr) {
        grassArr[i].mul();
     }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
     }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
     }
     
     for (var i in JokerArr) {
       JokerArr[i].move();
       JokerArr[i].eat();
       JokerArr[i].mul();
       JokerArr[i].die();
     }
      for (var i in wolfArr) {
        wolfArr[i].move();
        wolfArr[i].eat();
        wolfArr[i].mul();
        wolfArr[i].die();
     }
 }
    


