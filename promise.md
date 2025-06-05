JavaScript Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. Think of it as a placeholder for a future value.

Basic Structure
Here's a simple Promise example:

Promise States
A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected
Fulfilled: Operation completed successfully
Rejected: Operation failed
Using Promises
Here's a practical example:

Promise Methods
.then(): Handles successful completion
.catch(): Handles errors
.finally(): Executes regardless of success/failure
Common Promise Patterns
Promise Chaining
Promise.all()
Waits for multiple promises to complete:

Promise.race()
Returns the first promise to settle:

Best Practices
Always handle errors using .catch()
Use async/await for cleaner code when possible
Avoid nesting promises (use chaining instead)
Keep promise chains flat
Return promises from functions for consistency
Promises are fundamental to modern JavaScript and form the basis for the async/await syntax, which provides an even cleaner way to handle asynchronous operations.


*******************************************
 Promise are need to first create and then consume it means how to directly usedd into your's programms.
