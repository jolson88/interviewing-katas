# Chat Room

A simple chat room experience. Users can join, leave, and send messages.

Some example scenarios of features to be implemented:

## Example scenarios

- Membership starts empty
- User can join
- Multiple users can join
- Fails if joined member tries to rejoin
- User can leave
- Remaining membership is preserved when user leaves
- Fails when non-member tries to leave
- User can send message
- Fails when non-member tries to send a message
- History is capped at maximum length
- History is unchanged when user leaves

## Stages

- **0** - Scratch project. Start from the beginning with user membership.
- **1** - Basic membership and message sending. Start with managing history size

Potential future stages:

- Room and message information is persisted to disk or database
- Add logging support for room persistence
