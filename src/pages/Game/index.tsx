import React, { useEffect, useState } from 'react';
import drawBoard, { BOARD_WIDTH } from './drawBoard';

const step = BOARD_WIDTH / 4;
const perHeight = (step / 2) * Math.sqrt(3);
const perWidth = step / 2;

const RADIUS = 8;

type Piece = [number, number];

const defaultPieces: Piece[] = [];
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < i + 1; j += 1) {
    defaultPieces.push([i, j]);
  }
}

const Game = () => {
  const [pieces, setPieces] = useState(defaultPieces);

  useEffect(() => {
    const canvas = document.getElementById('board') as HTMLCanvasElement;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    drawBoard(context);
    // pieces.forEach(piece => {
    //   drawPiece(context, piece[0], piece[1]);
    // });
  });

  const handleClick = (piece: Piece) => {
    const newPieces = pieces.filter(each => !(each[0] === piece[0] && each[1] === piece[1]));
    setPieces(newPieces);
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas id="board" width={BOARD_WIDTH} height={BOARD_WIDTH} />
      {pieces.map(piece => {
        const key = `${piece[0]}-${piece[1]}`;
        const x = BOARD_WIDTH / 2 - perWidth * piece[0] + piece[1] * step - RADIUS;
        const y = piece[0] * perHeight - RADIUS;

        return (
          <svg
            key={key}
            width={RADIUS * 2}
            height={RADIUS * 2}
            style={{ position: 'absolute', top: y, left: x }}
            onClick={() => handleClick(piece)}
          >
            <circle cx={RADIUS} cy={RADIUS} r={RADIUS} stroke="black" style={{ fill: 'red' }} />
          </svg>
        );
      })}
    </div>
  );
};

export default Game;
