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

    it('multiple users can join', () => {
      room.join('first_user');
      room.join('second_user');

      expect(room.members()).toEqual([{ name: 'first_user' }, { name: 'second_user' }]);
    });

    it('fails if joined member tries to rejoin', () => {
      room.join('user');

      expect(() => {
        room.join('user');
      }).toThrow('user is already a member of the room');
    });

    it('user can leave', () => {
      room.join('user');

      room.leave('user');

      expect(room.members()).toEqual([]);
    });

    it('remaining membership is preserved when user leaves', () => {
      room.join('first_user');
      room.join('second_user');

      room.leave('first_user');

      expect(room.members()).toEqual([{ name: 'second_user' }]);
    });

    it('fails when non-member tries to leave', () => {
      expect(() => {
        room.leave('user');
      }).toThrow('user is not a member of the room.');
    });
  });

  describe('messages', () => {
    it('user can send message', () => {
      room.join('user');
      room.send({ from: 'user', message: 'the message' });

      expect(room.history()).toEqual([{ from: 'user', message: 'the message' }]);
    });

    it('fails when non-member tries to send a message', () => {
      expect(() => {
        room.send({ from: 'non_member', message: 'irrelevant_message' });
      }).toThrow('non_member is not a member');
      expect(room.history()).toEqual([]);
    });
  });

  describe('history', () => {
    it('does not change when user leaves', () => {
      room.join('first_user');
      room.join('second_user');
      room.send({ from: 'first_user', message: 'first message' });
      room.send({ from: 'second_user', message: 'second message' });

      room.leave('first_user');

      expect(room.history()).toEqual([
        { from: 'first_user', message: 'first message' },
        { from: 'second_user', message: 'second message' }
      ]);
    });

    it.todo('keeps only the configured number of messages', () => {
      // const room = new ChatRoom({ history: 2 });
      // room.join('user');
      //
      // room.send({ from: 'user', message: 'one' });
      // room.send({ from: 'user', message: 'two' });
      // room.send({ from: 'user', message: 'three' });
      //
      // expect(room.history()).toEqual([
      //   { from: 'user', message: 'two' },
      //   { from: 'user', message: 'three' }
      // ]);
    });
  });
});
