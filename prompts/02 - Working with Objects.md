# Working with Objects
In this section we'll be working with some common Object functions.

The required reading for this section is listed below. You can make the decision as to whether you'd like to work through each reading section one at a time – resolving the test cases immediately after reading each section – or if you'd like to read through it all in one go and solve the tests after.

As in the last section, it's important to note that properties and functions preceded by `Object.prototype` belong to specific instances of Objects, and functions preceded by only `Object` are accessible using the global `Object` object.

Examples:
- `Object.keys()` means that you can do `Object.keys(OBJECT_VALUE)`
- `Object.prototype.hasOwnProperty()` means that you can do `{prop1: 'value1'}.hasOwnProperty('prop1')`

## Required Reading
- [the instanceof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

### A quick note
In the last section, we got familiar with `Array.isArray()` to determine if a value is an instance of an Array. Unfortunately, the Object class doesn't have this sort of method, so – in this section – we'll rely on a more versatile approach: the `instanceof` operator. It may be a knee jerk reaction to assume that – given the reading from last section – you can just use `Object.isObject(...)`. Not true. :)

## Instructions
All of the tests associated with this section will be run against the file located in `src/classes/ObjectUtil.js`. This file simply exports a basic ES6 class. The errors initially returned from `npm test` should give you some insight into what class functions the tests are looking for and what the expected behavior should be for each function. However, below I'll list the functions being tested and their expected behavior explicitly.

## Functions
**mergeObjects()**
- accepts two arguments
- returns an empty Object if one or more of the arguments are not an Object
- otherwise, returns a single Object containing the properties and values from both Object arguments

Example: `.mergeObjects({ prop1: 'val1' }, { prop2: 'val2' })` should return `{ prop1: 'val1', prop2: 'val2' }`

_Uses the `instanceof` operator and `Object.assign()`_

**getObjectKeys()**
- accepts a single argument
- returns an empty Array if the argument is not an Object
- otherwise, returns an Array containing the "keys" (property names) from the Object argument

Example: `.getObjectKeys({ a: 'b', b: 'c' })` should return `['a', 'b']`

_Uses the `instanceof` operator and `Object.keys()`_

**getObjectValues()**
- accepts a single argument
- returns an empty Array if the argument is not an Object
- otherwise, returns an Array containing the "values" (property values) from the Object argument

Example: `.getObjectValues({a: 'b', b: 'c'})` should return `['b', 'c']`

_Uses the `instanceof` operator and `Object.values()`_

**objectHasProperty()**
- acepts two arguments
    - an Object argument
    - a string argument representing the property name being search for
- returns `false` if the first argument is not an Object
- otherwise, returns `true` or `false` depending on whether the Object contains a property with a name matching the second argument

Example: `.objectHasProperty({a: false}, 'a')` should return `true`

Example: `.objectHasProperty({a: false}, 'b')` should return `false`

_Uses the `instanceof` operator and `Object.prototype.hasOwnProperty()`

## Once you're passing
Once your tests are all passing, you can move on to the next task.
