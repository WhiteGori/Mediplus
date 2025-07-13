import {UserMedDB} from './dummyDB';

class BaseUser {
  private readonly _email: string;
  private readonly _password: string;
  private readonly _medDB: UserMedDB;

  constructor(email: string, password: string) {
    this._email = email;
    this._password = password;
    this._medDB = new UserMedDB();
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get medDB(): UserMedDB {
    return this._medDB;
  }
}

class User extends BaseUser {
  constructor(email: string, password: string) {
    super(email, password);
  }
}

class Pharmacy extends BaseUser {
  constructor(email: string, password: string) {
    super(email, password);
  }
}

const Users: BaseUser[] = [];
let userCount = 0;

export enum USER_TYPES {
  USER,
  PHARMACY,
}
export function createUser(
  email: string,
  password: string,
  type: number,
): number {
  if (type !== USER_TYPES.USER && type !== USER_TYPES.PHARMACY) {
    return -1;
  }
  let toAdd: BaseUser;
  if (type === USER_TYPES.USER) {
    toAdd = new User(email, password);
  } else if (type === USER_TYPES.PHARMACY) {
    toAdd = new Pharmacy(email, password);
  } else {
    return -1;
  }
  let toReturn: number = userCount;
  Users.push(toAdd);
  userCount++;
  return toReturn;
}

export function getUser(ID: number): BaseUser {
  return Users[ID];
}

export function authenticate(email: string, password: string): number {
  let i: number;
  let user: BaseUser;
  for (i = 0; i < Users.length; i++) {
    user = Users[i];
    if (user.email === email && user.password === password) {
      return i;
    }
  }
  return -1;
}
