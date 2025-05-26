export interface Message {
  from: string;
  message: string;
}

export interface User {
  name: string;
}

export class ChatRoom {
  private _members: Array<User>;
  private _history: Array<Message>;

  constructor() {
    this._members = [];
    this._history = [];
  }

  members(): Array<User> {
    return this._members;
  }

  join(name: string) {
    if (this.#isMember(name)) {
      throw `${name} is already a member of the room.`;
    }

    this._members.push({
      name
    });
  }

  leave(name: string) {
    if (!this.#isMember(name)) {
      throw `${name} is not a member of the room.`;
    }

    this._members = this._members.filter((member) => member.name !== name);
  }

  send(message: Message) {
    if (!this.#isMember(message.from)) {
      throw `${message.from} is not a member`;
    }

    this._history.push(message);
  }

  history() {
    return this._history;
  }

  #isMember(name: string): boolean {
    return this._members.find((member) => member.name === name) !== undefined;
  }
}
