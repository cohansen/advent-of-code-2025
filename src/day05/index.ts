import { loadFile } from '../utilities.js';

const data = loadFile('day05/data.txt');
const ranges: [number, number][] = [];

let inFreshRange: boolean = true;
let freshCount = 0;

for (const line of data) {
  if (line === '') {
    break;
  }

  if (inFreshRange) {
    const splitLine = line.split('-');

    ranges.push([Number(splitLine[0]), Number(splitLine[1])]);
  }
}

ranges.sort((a, b) => a[0] - b[0]);

const mergedRanges: [number, number][] = [];

for (const [start, end] of ranges) {
  if (mergedRanges.length === 0) {
    mergedRanges.push([start, end]);
    continue;
  }

  const last = mergedRanges[mergedRanges.length - 1];

  if (last !== undefined && start <= last[1]) {
    last[1] = Math.max(last[1], end);
  } else {
    mergedRanges.push([start, end]);
  }
}

for (const [start, end] of mergedRanges) {
  freshCount += end - start + 1;
}

console.log(`Fresh Ingredients: ${freshCount}`);
