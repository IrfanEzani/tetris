document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const score = document.querySelector('#score')
  const startBtn = document.querySelector('#start-button')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const width = 10

  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width * 2 + 1, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

  const tetrominoes = [lTetromino, zTetromino, oTetromino, tTetromino, iTetromino]

  let random = Math.floor(Math.random() * tetrominoes.length)
  let currentPosition = 2
  let currentRotation = 0
  let current = tetrominoes[2][0]


  function draw () {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetronimo')
    })
  }

  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetronimo')
    })
  }

  //tetromino move down
  timerId = setInterval(moveDown,500);

  function moveDown() {
    undraw()
    currentPosition+=width;
    draw()
    freeze()
  }

  function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))

      let random = Math.floor(Math.random() * tetrominoes.length)
      current = tetrominoes[random][currentRotation]
      currentPosition = 2;
      draw()
    }
  }



})
