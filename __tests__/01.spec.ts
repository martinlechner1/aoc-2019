import { deriveFuel, totalFuel, deriveRecursiveFuel, totalRecursiveFuel } from '../src/01';
import { fileToArray } from '../src/util';

describe('Day one', () => {
  it('should fulfill examples', () => {
    expect(deriveFuel(12)).toEqual(2);
    expect(deriveFuel(14)).toEqual(2);
    expect(deriveFuel(1969)).toEqual(654);
    expect(deriveFuel(100756)).toEqual(33583);
  });

  it('should calculate the correct value 1a', () => {
    const numbers = fileToArray('01.txt', s => parseInt(s, 10));
    expect(totalFuel(numbers)).toEqual(3520097);
  });

  it('should fulfill recursive fuel examples', () => {
    expect(deriveRecursiveFuel(14)).toEqual(2);
    expect(deriveRecursiveFuel(1969)).toEqual(966);
    expect(deriveRecursiveFuel(100756)).toEqual(50346);
  });

  it('should calculate the correct value 1b', () => {
    const numbers = fileToArray('01.txt', s => parseInt(s, 10));
    expect(totalRecursiveFuel(numbers)).toEqual(5277255);
  });
});
