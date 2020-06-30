/* eslint-disable no-param-reassign */
import { BOARD_WIDTH } from './drawBoard';

const drawPiece = (context: CanvasRenderingContext2D, x: number, y: number): void => {
  const step = BOARD_WIDTH / 4;
  const perHeight = (step / 2) * Math.sqrt(3);
  const perWidth = step / 2;

  context.fillStyle = 'red';
  context.beginPath();
  context.arc(BOARD_WIDTH / 2 - perWidth * x + y * step, x * perHeight, 6, 0, Math.PI * 2, true);
  context.fill();
};

export default drawPiece;
