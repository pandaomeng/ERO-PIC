import React, { useEffect, useState } from 'react';
import drawBoard, { BOARD_WIDTH } from './drawBoard';

const step = BOARD_WIDTH / 4;
const perHeight = (step / 2) * Math.sqrt(3);
const perWidth = step / 2;

const RADIUS = 20;

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
  const [message, setMessage] = useState('游戏开始');

  useEffect(() => {
    const canvas = document.getElementById('board') as HTMLCanvasElement;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    drawBoard(context);
  });

  const changePieceStatus = (
    currentPieces: Piece[],
    pieceId: string,
    status: PieceStatus,
  ): Piece[] => {
    const newPieces = currentPieces.map(each => ({
      ...each,
      ...(each.id === pieceId && { status }),
    }));
    return newPieces;
  };

  const handleClick = (piece: Piece) => {
    setMessage('游戏正常');

    // 如果一开始没有取下过棋子，则取下一枚
    if (pieces.every(each => each.status !== 'EMPTY')) {
      const newPieces = changePieceStatus(pieces, piece.id, 'EMPTY');
      setPieces(newPieces);
      return;
    }

    // 处理跳棋逻辑
    if (piece.status === 'EMPTY') {
      const focusedPiece = pieces.find(each => each.status === 'FOCUS');
      if (!focusedPiece) {
        setMessage('无效的点击');
        return;
      }

      // 横向：|x1 - x2| == 2 && y1 == y2
      // 左斜：|y1 - y2| == 2 && x1 == x2
      // 右斜：|x1 - x2| == 2 && |y1 - y2| == 2 && (x1 - x2)(y1 - y2) > 0 同向
      const [x1, y1] = [focusedPiece.i, focusedPiece.j];
      const [x2, y2] = [piece.i, piece.j];
      const flag1 = Math.abs(x1 - x2) === 2 && y1 === y2;
      const flag2 = Math.abs(y1 - y2) === 2 && x1 === x2;
      const flag3 = Math.abs(y1 - y2) === 2 && Math.abs(x1 - x2) === 2 && (x1 - x2) * (y1 - y2) > 0;
      if (!(flag1 || flag2 || flag3)) {
        setMessage('选中的棋子只能隔一个棋子跳到空位置上');
        return;
      }

      const killedPieceX = Math.abs(x1 + x2) / 2;
      const killedPieceY = Math.abs(y1 + y2) / 2;
      let newPieces: Piece[] = pieces;
      newPieces = changePieceStatus(newPieces, `${killedPieceX}-${killedPieceY}`, 'EMPTY');
      newPieces = changePieceStatus(newPieces, focusedPiece.id, 'EMPTY');
      newPieces = changePieceStatus(newPieces, piece.id, 'FOCUS');
      setPieces(newPieces);
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

  const resetGame = () => {
    setPieces(defaultPieces);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <div>游戏目标：点击棋子使棋盘上最终只有一个棋子</div>
      <div style={{ width: BOARD_WIDTH, height: 500, margin: '50px auto', textAlign: 'center' }}>
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
        <div>{message}</div>
        <button type="button" onClick={resetGame}>
          重新开始游戏
        </button>
      </div>
    </div>
  );
};

export default Game;
