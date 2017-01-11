
export const add = (a: number, b: number): number => {
  return a +b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};


interface Person {
  firstName: string;
  lastName: string;
  setName(firstName: string, lastName: string): void;
};


// just to see if this is uncovered
export class PersonImpl implements Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setName(firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
