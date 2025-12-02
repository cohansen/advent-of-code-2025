import * as fs from 'node:fs';

export function loadFile(filePath: string): string[] {
  try {
    const data = fs.readFileSync(`src/${filePath}`, 'utf-8');

    return data.split(/\n/);
  } catch (error) {
    console.error(`Could not load file from ${filePath}`, error);
  }

  return [];
}
