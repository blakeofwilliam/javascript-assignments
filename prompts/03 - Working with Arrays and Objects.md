# Working with Arrays and Objects

In this section, we'll be exporing how Object functions and Array functions can work together. Afterall, some of the Object functions from the last section return Arrays.

This gives us a chance to dig a little deeper into how we can use prototype functions on the *_result_* of another function.

## Required reading
None. We've actually already covered everything you'll need for this section!!!

## Functions
**getValidObjectKeys()**
- accepts two arguments (expects: Object, Array)
- returns an empty Array if the first argument is not an Object
- returns an empty Array if the second argument is not an Array
- otherwise, returns an Array containing the keys that are in *both* the provided Object and the provided Array

Examples: 
`.getValidObjectKeys({ prop1: 'val1', prop2: 'val2' }, ['prop2']})` should return `['prop2']`
`.getValidObjectKeys({ prop1: 'val1', prop2: 'val2' }, ['prop0']})` should return `[]`

_Uses `Object.keys()`, `Array.filter()`, and `Array.includes()`_

**filterObject()**
- accepts two arguments (expects: Object, Array)
- returns an empty Object if the first argument is not an Object
- returns an empty Object if the sevond argument is not an Array
- otherwise, returns an Object containing *only* the properties and values corresponding to the keys provided in the second (Array) argument
- if none of the keys in the Array exist in the Object, an empty Object should be returned

Examples: 
`.filterObject({ prop1: 'val1', prop2: 'val2' }, ['prop1']})` should return `{ prop1: 'val1' }`
`.filterObject({ prop1: 'val1', prop2: 'val2' }, ['prop1', 'prop2']})` should return `{ prop1: 'val1', prop2: 'val2' }`
`.filterObject({ prop1: 'val1', prop2: 'val2' }, ['unknown']})` should return `{}`

_Uses `Array.reduce()`_

_*HINT: Since you just finished writing a function that filters your Object's keys, you can also simplify your function by using `this.getValidObjectKeys()`*_

**excludeInvalidObjectKeys()**
- accepts two arguments (expects: Object, Array)
- returns an empty Array if the first argument is not an Object
- returns an empty Array if the second argument is not an Array
- otherwise, returns an array of Object keys that are *not* contained in the second (Array) argument

Examples: 
`.excludeInvalidObjectKeys({ prop1: 'val1', prop2: 'val2' }, ['prop1'])` should return `['prop2']`
`.excludeInvalidObjectKeys({ prop1: 'val1', prop2: 'val2' }, ['prop1', 'prop2'])` should return `[]`
`.excludeInvalidObjectKeys({ prop1: 'val1', prop2: 'val2' }, ['unknown'])` should return `['prop1', 'prop2']`

_Uses `Object.keys()`, `Array.filter()`, and `Array.includes()`_

**sanitizeObject()**
- accepts two arguments (expects: Object, Array)
- returns an empty Object if the first argument is not an Object
- returns an empty Object if the sevond argument is not an Array
- otherwise, returns an Object containing *only* the properties and values *not* contained in the Array of keys provided in the second argument
- if all of the keys in the Array exist in the Object, an empty Object should be returned

Examples: 
`.sanitizeObject({ prop1: 'val1', prop2: 'val2' }, ['prop1'])` should return `{ prop1: 'val1' }`
`.sanitizeObject({ prop1: 'val1', prop2: 'val2' }, ['prop1', 'prop2'])` should return `{}`
`.sanitizeObject({ prop1: 'val1', prop2: 'val2' }, ['unknown'])` should return `{ prop1: 'val1', prop2: 'val2' }`

_Uses `Array.reduce()`_

_*HINT: Since you just finished writing a function that filters your Object's keys, you can also simplify your function by using `this.excludeInvalidObjectKeys()`*_