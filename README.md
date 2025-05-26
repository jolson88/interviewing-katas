# Interviewing Katas

This repository contains a set of interviewing katas of different varieties. They are intended to be used as a tool to conduct
pair-programming interviews, though they can be used for normal TDD practice as well.

Some of the projects support numbered "stages" that allow the exercise to be started from differing levels of completeness
or complexity.

## Projects

To create a new project/kata, you can copy the _template directory to a new directory and start from there.

### Chat Room

A simple chat room experience. Users can join, leave, and send messages.

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

### Coming Soon

More coming soon...

Potential future ideas:

- **To-Do List Manager**
  - Starts empty
  - Add a task
  - Complete a task
  - Remove a task
  - List filter (list.pending() or list.done() for example)
  - Due dates & overdue
  - Task persistence (saving to disk/db)
- **URL Shortener**
  - Shorten URL (`shorten('https://myurl.com')` returns a code string of a given length)
  - Resolve URL (`expand('12avd3') => to some URL` based on algorithm chosen)
  - Invalid code detection
  - Idempotent shortening (shortening the same url twice has same result)
  - Custom aliases for a given code
  - Visit counter per code
- **Bank Account and Transfers**
  - Open account
  - Deposit cash
  - Withdrawal
  - Overdraft protection
  - Transfer between accounts
    - Insufficient fund check before deduction, data remains consistent
  - Interest accrual
  - Monetary conversion
- **Rate-limiting Middleware**
  - Allow X calls within limit
  - Block excess calls within limit
  - Reset after window
  - Scoped by API key (independent keys get independent counters)
  - Custom window (can configure custom hit and time duration limits/windows)

