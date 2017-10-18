# 00 - Startup
In this assignment, we'll just be fulfilling a basic requirement to see how our tests will look when they pass vs when they fail.

## The test
The only test in our test suite at this point is testing the file located at `src/app.js`. This file exports a basic ES6 class. Run `npm test` in the terminal to see what this test is expecting to happen.

## Test results
When you run `npm test`, you should see some output that looks something like this:

```javascript
App
    constructor()
      1) should set instance `name` property to `Javascript`


  0 passing (28ms)
  1 failing

  1) App
       constructor()
         should set instance `name` property to `Javascript`:
     AssertionError [ERR_ASSERTION]: undefined == 'Javascript'
      at Context.<anonymous> (test/app.spec.js:12:20)
```

This tells you in order:
- What class/component/module is being tested; in this case the `App` class
- What function is being tested; in this case the `constructor()` function
- What tests have executed; in this case, `should set instance `name` property to "Javscript"`
- How many tests passed; in this case, `0 Passing`
- How many tests failed; in this case, `1 failing`
- The errors associated with a given tests failure; in this case `AssertionError [ERR_ASSERTION]: undefined == 'Javascript'`
    - What the current error means is that test is currently expecting the `constructor()` function to set the `name` property of the class to be equal to `Javascript`, but `undefined` is not equal to `Javascript`

## The assignment
Update the `constructor()` function of the `App` class in `src/app.js` so that the current test passes.

**HINT:** The only thing this test is currently expecting is that the constructor sets a `name` property equal to `Javascript`. Remember that you can access the instance from inside the class' functions using the `this` keyword.

Once you think your updated code accomplishes the task at hand, run `npm test` again. Continue to do this until you have `1 passing` and `0 failing` tests.

## Once you're passing
Once your tests are all passing, you can move on to the next task.