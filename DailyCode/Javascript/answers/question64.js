//A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

//Given N, write a function to return the number of knight's tours on an N by N chessboard.

const moves = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1]
];

var count;

const getKnightToursCount = n => {
  //init all possible solutions
  count = 0;
  let board = new Array(n).fill().map(() => new Array(n).fill(0));
  let tour = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cloneBoard = deepCopy(board);
      let cloneTour = tour;
      getKnightToursCountHelper(cloneBoard, cloneTour, n, i, j);
    }
  }
  return count;
};

const getKnightToursCountHelper = (board, tour, n, i, j) => {
  board[i][j] = 1;
  //tour.push([i, j]);
  tour++;

  if (tour == n * n) {
    count++;
    return 1;
  }

  for (var l = 0; l < moves.length; l++) {
    var move = moves[l];
    const cloneBoard = deepCopy(board);
    const cloneTour = tour;
    if (isValid(cloneBoard, n, i + move[0], j + move[1])) {
      //using elipsis to clone!
      //console.log(`iterationCounter=${iterationCounter} i=${i} j=${j} tour=${cloneTour.length}`);
      getKnightToursCountHelper(
        cloneBoard,
        cloneTour,
        n,
        i + move[0],
        j + move[1]
      );
    }
  }
};

const isValid = (board, n, i, j) => {
  if (i >= 0 && i < n && j >= 0 && j < n && board[i][j] === 0) return true;
  else return false;
};

const deepCopy = arr => {
  var len = arr.length;
  var copy = new Array(len); // boost in Safari
  for (var i = 0; i < len; ++i) copy[i] = arr[i].slice(0);

  return copy;
  // let copy = [];
  // arr.forEach(elem => {
  //   if (Array.isArray(elem)) {
  //     copy.push(deepCopy(elem))
  //   } else {
  //     if (typeof elem === 'object') {
  //       //copy.push(deepCopyObject(elem))
  //     } else {
  //       copy.push(elem)
  //     }
  //   }
  // })
  // return copy;
};

if (typeof exports !== "undefined") {
  exports.getKnightToursCount = getKnightToursCount;
}