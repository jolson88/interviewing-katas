export class Chat {
  private _members: Array<any>;

  constructor() {
    this._members = [];
  }

  members(): Array<any> {
    return this._members;
  }

  join(name: string) {
    this._members.push({
      name
    });
  }

  leave(name: string) {
    if (!this._members.find(member => member.name === name)) {
      throw `${name} is not a member of the room.`
    }

    this._members = this._members.filter(member => member.name !== name)
  }
}