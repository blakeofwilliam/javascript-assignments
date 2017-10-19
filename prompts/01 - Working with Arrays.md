# Working with Arrays
In this section we'll be working with some common Array functions.

The required reading for this section is listed below. You can make the decision as to whether you'd like to work through each reading section one at a time – resolving the test cases immediately after reading each section – or if you'd like to read through it all in one go and solve the tests after.

One important note is that properties and functions preceded by `Array.prototype` belong to specific instances of Arrays, and functions preceded by only `Array` are accessible using the global `Array` object.

Examples:
- `Array.length` means that you can do `[].length`
- `Array.prototype.push()` means that you can do `[].push(VALUE)`
- `Array.isArray()` means that you can do `Array.isArray(VALUE)`

## Required Reading
- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a)

## Instructions
All of the tests associated with this section will be run against the file located in `src/classes/ArrayUtil.js`. This file simply exports a basic ES6 class. The errors initially returned from `npm test` should give you some insight into what class functions the tests are looking for and what the expected behavior should be for each function. However, below I'll list the functions being tested and their expected behavior explicitly.

### Function 
**getArrayLength()**
- accepts a single argument 
- returns `-1` if the argument is not an Array
- otherwise, returns the length of the passed Array argument

Example: `.getArrayLength([1, 2, 3])` should return `3`

_Uses `Array.isArray()` and `Array.length`_

**getEvenNumbers()**
- accepts a single argument
- returns an empty Array if the argument is not an Array
- otherwise, returns an Array containing only the even numbers in the passed Array argument

Example: `.getEvenNumbers([1, 2, 3, 4])` should return `[2, 4]`

_Uses `Array.isArray()` and `Array.prototype.filter()`_

**logArrayValues()**
- accepts a single argument
- logs `No array provided!` if the argument is not an Array
- otherwise, logs each element in the array one at a time

Example: `.logArrayValues([1, 2, 3, 4])` should log:

```
1
2
3
4
```

_Uses `Array.isArray()` and `Array.prototype.forEach()`_

**createStringFromArray()**
- accepts a single argument
- returns an empty string if the argument is not an Array
- otherwise, returns a string containing the value of each element in the array with a space in between each

Example: `.createStringFromArray(['hello', 'world', '123', '!'])` should return `hello world 123 !`

_Uses `Array.isArray()` and `Array.prototype.join()`_

**doubleArrayValues()**
- accepts a single argument
- returns an empty array if the argument is not an Array
- otherwise, returns an array with the double of the original array values

Example: `.doubleArrayValues([1, 2, 3])` should return `[2, 4, 6]`

_Uses `Array.isArray()` and `Array.prototype.map()`_

## Once you're passing
Once your tests are all passing, you can move on to the next task.