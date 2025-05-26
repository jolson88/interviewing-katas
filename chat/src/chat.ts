export class Chat {
  private readonly _members: Array<any>;

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
}