export interface User {
  name: string;
}

export class ChatRoom {
  private _members: Array<User>;

  constructor() {
    this._members = [];
  }

  members(): Array<User> {
    return this._members;
  }
}
