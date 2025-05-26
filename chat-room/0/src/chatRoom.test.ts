import { describe, it, expect, beforeEach } from 'vitest';
import { ChatRoom } from './chatRoom';

describe('ChatRoom', () => {
  let room: ChatRoom;

  beforeEach(() => {
    room = new ChatRoom();
  });

  describe('membership', () => {
    it('starts empty', () => {
      expect(room.members()).toEqual([]);
    });

    it('user can join', () => {
      room.join('user');

      expect(room.members()).toEqual([{ name: 'user' }]);
    });
  });
});
