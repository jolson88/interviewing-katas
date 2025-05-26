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

  // user can join chat

  // user can leave chat

  // user can send message

  // non-member unable to send message

  // history is capped at max history

  // a user leaving doesn't clear history
});
