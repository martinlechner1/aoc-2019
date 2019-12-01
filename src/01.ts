import { monoidSum } from 'fp-ts/lib/Monoid';
import { foldMap } from 'fp-ts/lib/Array';

export const deriveFuel = (mass: number): number => Math.floor(mass / 3) - 2;

export const totalFuel: (arg0: number[]) => number = foldMap(monoidSum)(deriveFuel);

const recursiveFuel = (fuelMass: number) => {
  if (fuelMass > 0) {
    return fuelMass + recursiveFuel(deriveFuel(fuelMass));
  } else {
    return 0;
  }
};

export const deriveRecursiveFuel = (mass: number): number => recursiveFuel(deriveFuel(mass));

export const totalRecursiveFuel: (arg0: number[]) => number = foldMap(monoidSum)(deriveRecursiveFuel);
