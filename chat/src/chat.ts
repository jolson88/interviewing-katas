export class Chat {
  private _members: Array<any>;
  private _history: Array<any>;

  constructor() {
    this._members = [];
    this._history = [];
  }

  members(): Array<any> {
    return this._members;
  }

  join(name: string) {
    if (this._members.find(member => member.name === name)) {
      throw `${name} is already a member of the room.`
    }

    this._members.push({
      name
    });
  }

  leave(name: string) {
    const remainingMembers = this._members.filter(member => member.name !== name);
    if (remainingMembers.length === this._members.length) {
      throw `${name} is not a member of the room.`
    }

    this._members = remainingMembers
  }

  send(message: object) {
    this._history.push(message)
  }

  history() {
    return this._history
  }
}