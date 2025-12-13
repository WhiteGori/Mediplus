/* THIS FILE SHOULD BE REPLACED WHEN THE DATA BASE IS IMPLEMENTED */

export class UserMedDB implements Iterable<Medication> {
  private readonly _medArray: Array<Medication>;
  constructor() {
    this._medArray = [];
  }

  _index(medID: number): number {
    let i: number;
    for (i = 0; i < this.size(); i++) {
      if (this._medArray[i].id === medID) {
        return i;
      }
    }
    return -1;
  }

  size(): number {
    return this._medArray.length;
  }

  get(index: number): Medication | undefined {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    return Medication.copyOf(this._medArray[index]);
  }

  addMore(medID: number, quantity: number = 1): boolean {
    let index: number = this._index(medID);
    if (index === -1) {
      return false;
    }
    this._medArray[index].remaining += quantity;
    return true;
  }

  consume(medID: number, quantity: number = 1): boolean {
    let index: number = this._index(medID);
    if (index === -1 || quantity > this._medArray[index].remaining) {
      return false;
    }
    this._medArray[index].remaining -= quantity;
    return true;
  }

  add(medID: number, hour: number, minute: number, remaining: number) {
    if (this._index(medID) === -1) {
      this._medArray.push(new Medication(medID, hour, minute, remaining));
      return true;
    }
    return false;
  }

  remove(medID: number): boolean {
    let indexToRemove: number = this._index(medID);
    if (indexToRemove === -1) {
      return false;
    }
    this._medArray.splice(indexToRemove, 1);
    return true;
  }

  [Symbol.iterator](): Iterator<Medication> {
    let index: number = 0;
    return {
      next: (): IteratorResult<Medication> => {
        if (index < this._medArray.length) {
          return {
            value: Medication.copyOf(this._medArray[index++]),
            done: false,
          };
        } else {
          return {done: true, value: undefined as any};
        }
      },
    };
  }
}

class Medication {
  _id: number;
  _hour: number;
  _minute: number;
  _remaining: number;
  constructor(id: number, hour: number, minute: number, remaining: number) {
    this._id = id;
    this._hour = hour;
    this._minute = minute;
    this._remaining = remaining;
  }

  get id() {
    return this._id;
  }

  get hour() {
    return this._hour;
  }

  get minute() {
    return this._minute;
  }

  get remaining() {
    return this._remaining;
  }

  set remaining(value: number) {
    this._remaining = value;
  }

  static copyOf(med: Medication): Medication {
    return new Medication(med.id, med.hour, med.minute, med.remaining);
  }
}

export const MedDataBase = [
  {
    id: 1,
    commercialName: 'Levotiroxina',
    dosage: '100mcg',
  },
  {
    id: 2,
    commercialName: 'Ibuprofeno',
    dosage: '400mg',
  },
];

