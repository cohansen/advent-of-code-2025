import { loadFile } from '../utilities.js';

const data = loadFile('day02/data.txt');

let invalidTotal = 0;

if (data !== undefined && data[0] !== undefined) {
  const splitData = data[0].split(',');

  for (const item of splitData) {
    const splitItem = item.split('-');
    const lower = Number(splitItem[0]);
    const upper = Number(splitItem[1]);

    // Inclusive.
    for (let i = lower; i < upper + 1; i++) {
      const stringValue = i.toString();

      if (hasRepatingDigits(stringValue, Math.floor(stringValue.length / 2))) {
        invalidTotal += i;
      }
    }
  }
}

console.log(invalidTotal);

function hasRepatingDigits(s: string, length: number): boolean {
  if (length === 0) {
    return false;
  }

  const substr = s.substring(0, length);
  const pattern = `.{1,${length}}`;
  const splitString = s.match(new RegExp(pattern, 'g'));

  let match = true;

  if (splitString !== null) {
    for (let char of splitString) {
      if (char !== substr) {
        match = false;
      }
    }

    if (match) {
      return true;
    }
  }

  return hasRepatingDigits(s, (length -= 1));
}
