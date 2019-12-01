import * as fs from 'fs';
import * as path from 'path';

// This should be IO
export function fileToArray<T>(filename: string, formatter: (s: string) => T): T[] {
  return fs
    .readFileSync(path.resolve(process.cwd(), 'data', filename), 'utf-8')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s !== '')
    .map(formatter);
}
