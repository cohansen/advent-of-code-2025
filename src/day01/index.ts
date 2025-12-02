import { loadFile } from '../utilities.js';

type Direction = 'L' | 'R';

const START_POSITION = 50;
const data = loadFile('day01/data.txt');

let currentPosition = START_POSITION;
let zeroCount = 0;

if (data !== undefined) {
  for (let i = 0; i < data.length; i++) {
    const line = data[i];

    if (line !== undefined) {
      const direction: Direction = line.slice(0, 1) as Direction;
      const amount = Number(line.slice(1, line.length));
      const step = direction === 'L' ? -1 : 1;

      for (let i = 0; i < amount; i++) {
        currentPosition = (((currentPosition + step) % 100) + 100) % 100;

        if (currentPosition === 0) {
          zeroCount++;
        }
      }
    }
  }
}

console.log(zeroCount);
