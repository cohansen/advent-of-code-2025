import { loadFile } from '../utilities.js';

const data = loadFile('day04/data.txt');
const paperMap = populateMap(data);

let accessiblePaperRolls = 0;
let paper = -1;

while (paper !== 0) {
  paper = iterMap(paperMap, true);
  iterMap(paperMap, false);
  accessiblePaperRolls += paper;
}

function iterMap(paperMap: string[][], count: boolean): number {
  let accessiblePaperRolls = 0;

  for (let row = 0; row < paperMap.length; row++) {
    for (let col = 0; col < paperMap[row]!.length; col++) {
      if (count) {
        let neighborCount = 0;

        if (paperMap[row][col] === '@') {
          neighborCount += checkNeighbor(paperMap, row - 1, col - 1);
          neighborCount += checkNeighbor(paperMap, row - 1, col);
          neighborCount += checkNeighbor(paperMap, row - 1, col + 1);
          neighborCount += checkNeighbor(paperMap, row, col - 1);
          neighborCount += checkNeighbor(paperMap, row, col + 1);
          neighborCount += checkNeighbor(paperMap, row + 1, col - 1);
          neighborCount += checkNeighbor(paperMap, row + 1, col);
          neighborCount += checkNeighbor(paperMap, row + 1, col + 1);

          if (neighborCount < 4) {
            accessiblePaperRolls++;
            paperMap[row][col] = 'x';
          }
        }
      } else {
        if (paperMap[row][col] === 'x') {
          paperMap[row][col] = '.';
        }
      }
    }
  }

  return accessiblePaperRolls;
}

console.log(`Accessible Paper Rolls: ${accessiblePaperRolls}`);

function checkNeighbor(map: string[][], row: number, col: number): number {
  if (map && map[row] && map[row][col]) {
    return map[row][col] !== '.' ? 1 : 0;
  }

  return 0;
}

function populateMap(data: string[]): string[][] {
  const paperMap: string[][] = [];
  let row = 0;

  for (const line of data) {
    const splitLine = line.split('');
    let col = 0;

    for (const item of splitLine) {
      if (paperMap[row] === undefined) {
        paperMap[row] = [];
      }

      paperMap[row]![col] = item;
      col++;
    }

    row++;
  }

  return paperMap;
}
