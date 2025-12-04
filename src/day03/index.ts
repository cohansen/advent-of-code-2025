import { loadFile } from '../utilities.js';

const data = loadFile('day03/data.txt');

let joltage = 0;

if (data !== undefined) {
  for (let line of data) {
    let battery: string[] = [];
    let toRemove = line.length - 12;

    for (const digit of line.split('')) {
      while (
        toRemove > 0 &&
        battery.length > 0 &&
        battery[battery.length - 1] < digit
      ) {
        battery.pop();
        toRemove--;
      }

      battery.push(digit);
    }

    joltage += Number(battery.slice(0, 12).join(''));
  }
}

console.log(`Joltage: ${joltage}`);
