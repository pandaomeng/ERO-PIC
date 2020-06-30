import React, { useEffect, useState } from 'react';
import drawBoard, { BOARD_WIDTH } from './drawBoard';

const step = BOARD_WIDTH / 4;
const perHeight = (step / 2) * Math.sqrt(3);
const perWidth = step / 2;

const RADIUS = 8;

type PieceStatus = 'COMMON' | 'FOCUS' | 'EMPTY';
type Piece = {
  id: string;
  i: number;
  j: number;
  status: PieceStatus;
};

const defaultPieces: Piece[] = [];
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < i + 1; j += 1) {
    defaultPieces.push({
      id: `${i}-${j}`,
      i,
      j,
      status: 'COMMON',
    });
  }
}

type ColorMapping = {
  [key in PieceStatus]: string;
};
const colorMapping = {
  COMMON: 'red',
  FOCUS: 'blue',
  EMPTY: '#FFFFFF00',
};

const Game = () => {
  const [pieces, setPieces] = useState(defaultPieces);

  useEffect(() => {
    const canvas = document.getElementById('board') as HTMLCanvasElement;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    drawBoard(context);
  });

  const handleClick = (piece: Piece) => {
    if (pieces.every(each => each.status !== 'EMPTY')) {
      const newPieces = pieces.map(each => ({
        ...each,
        ...(each.id === piece.id && { status: 'EMPTY' as PieceStatus }),
      }));
      setPieces(newPieces);
      return;
    }

    if (piece.status === 'EMPTY') {
      // 处理跳转逻辑
      return;
    }

    // 点击了 COMMON 或者 FOCUS
    const newPieces = pieces.map(each => {
      if (each.status === 'EMPTY') return each;
      if (each.id === piece.id) {
        return { ...each, status: (each.status === 'COMMON' ? 'FOCUS' : 'COMMON') as PieceStatus };
      }
      return { ...each, status: 'COMMON' as PieceStatus };
    });
    setPieces(newPieces);
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas id="board" width={BOARD_WIDTH} height={BOARD_WIDTH} />
      {pieces.map(piece => {
        const { id, i, j, status } = piece;
        const x = BOARD_WIDTH / 2 - perWidth * i + j * step - RADIUS;
        const y = i * perHeight - RADIUS;

        const color = colorMapping[status];

        return (
          <svg
            key={id}
            width={RADIUS * 2}
            height={RADIUS * 2}
            style={{ position: 'absolute', top: y, left: x }}
            onClick={() => handleClick(piece)}
          >
            <circle
              cx={RADIUS}
              cy={RADIUS}
              r={RADIUS}
              stroke="black"
              style={{ fill: color, strokeWidth: 0 }}
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Game;
