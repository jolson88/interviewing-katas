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
    const remainingMembers = this._members.filter(member => member.name !== name);
    if (remainingMembers.length === this._members.length) {
      throw `${name} is not a member of the room.`
    }

    this._members = remainingMembers
  }
}