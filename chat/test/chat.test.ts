import { describe, it, expect, beforeEach } from 'vitest';
import { Chat } from '../src/chat';

describe('Chat', () => {
  let room: Chat;

  beforeEach(() => {
    room = new Chat();
  });

  it('starts with no members', () => {
    expect(room.members()).toEqual([]);
  });

  it('user can join chat', () => {
    room.join('Alice');

    expect(room.members()).toEqual([
      { name: 'Alice' }
    ]);
  });

  it('multiple users can join chat', () => {
    room.join('Alice');
    room.join('Bob');

    expect(room.members()).toEqual([
      { name: 'Alice' },
      { name: 'Bob' }
    ]);
  });

  it('user can leave chat', () => {
    room.join('Alice');

    room.leave('Alice');
  
    expect(room.members()).toEqual([]);
  })

  it('user can leave chat from multiple-user room', () => {
    room.join('Alice');
    room.join('Bob');

    room.leave('Bob');
  
    expect(room.members()).toEqual([
      { name: 'Alice' }
    ]);
  })

  // user can send message

  // non-member unable to send message

  // history is capped at max history

  // a user leaving doesn't clear history
});
