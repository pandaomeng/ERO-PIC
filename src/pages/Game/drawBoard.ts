/* eslint-disable no-param-reassign */
export const BOARD_WIDTH = 400;

const drawBoard = (context: CanvasRenderingContext2D): void => {
  const height = (BOARD_WIDTH / 2) * Math.sqrt(3);
  const step = BOARD_WIDTH / 4;
  const perHeight = (step / 2) * Math.sqrt(3);
  const perWidth = step / 2;

  context.strokeStyle = '#999';

  for (let i = 0; i < 4; i += 1) {
    context.beginPath();
    context.moveTo(BOARD_WIDTH / 2 + perWidth * i, perHeight * i);
    context.lineTo(step * i, height);
    context.closePath();
    context.stroke();
  }

  for (let i = 0; i < 4; i += 1) {
    context.beginPath();
    context.moveTo(BOARD_WIDTH / 2 - perWidth * i, perHeight * i);
    context.lineTo(BOARD_WIDTH - step * i, height);
    context.closePath();
    context.stroke();
  }

  for (let i = 0; i < 5; i += 1) {
    context.beginPath();
    context.moveTo(BOARD_WIDTH / 2 - perWidth * i, perHeight * i);
    context.lineTo(BOARD_WIDTH / 2 + perWidth * i, perHeight * i);
    context.closePath();
    context.stroke();
  }
};

export default drawBoard;
