# Week 1 Assignment

## Getting Started

1. Fork this repository
2. Clone the repository to your local computer.
3. Install packages
   ```bash
   npm install
   ```
4. Ensure tests can be run. The test suite should fail initially, and the test suite runs both the lint and test commands.
   ```bash
   npm test
   ```
5. Use the following commands to test individual files and code correctness.
   ```bash
   # lint the code
   npm run lint

   # run jest tests in watch mode (handy for updating the code and seeing test results in real time)
   npm run test:watch

   # run tests in CI mode (no watch mode, runs the test suite and exits immediately)
   npm test

   # run an individual file (handy if you're trying to test/experiment with a single file)
   npm run file -- <file path>
   # example
   npm run file -- ./src/timer/runTimer.js
   ```

## Overview

1. The folder **src/components** contains a file called `HTMLElement.js`. In this file, create a module that meets the following requirements:
    * Create a class called `HTMLElement`. This class should have a constructor with two parameters: tag and content. Both of these parameters should be stored as instance variables within the class. Instance variables should have the same names as the parameters.
    * Once the HTMLElement class is created, add a function to the class called `render` that can be called publicly. This function should return the HTML element with the content provided.
    * Within `render`, use a template literal to render the element.
    * Example usage (you can see the tests for more examples):

    ```js
    const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');

    console.log(lovelaceQuote.render());
    // prints "<p>I am never so happy as when I am really engaged in good earnest...</p>"
    ```

  * Note that you'll need to change the `export default {}` line to export the class instead of an empty object literal.

2. The folder **src/components** contains a file called `DivElement.js`. In this file, create a module that meets the following requirements:
    * Create a class called `DivElement` that extends the `HTMLElement` class created previously. You'll need to import the class made in step 1.
    * This class should have a constructor with one parameter: `content`.
    * This class should inherit the render function in the parent class (do not override it, aka define it in `DivElement`).
    * Within `render`, use a template literal to render the element.
    * Example usage:

    ```js
    const andIThinkToMyself = new DivElement('What a wonderful world');

    console.log(andIThinkToMyself.render());
    // prints "<div>What a wonderful world</div>"
    ```

3. The folder **src/timer** contains two files called `Timer.js` and `runTimer.js`. Perform the following tasks:
    * Examine the code in these two files and determine each script's behavior.
    * Refactor the code to use the ES6 class syntax.
    * Refactor the code to use arrow function(s).
    * Refactor the code to use `let/const`.
    * Refactor the code to avoid assigning `this` to a variable.

4. The folder **src/rolodex** contains two files called `people.json` and `rolodexPrinter.js`. Perform the following tasks:
    * Refactor the code to use template literals.
    * Refactor the code to use object destructuring.
    * Refactor the code to use array destructuring.

## Submission

* In order for a valid submission, all tests must pass when running `npm test`.
* In order for a valid submission, the linter should produce no errors (warnings are ok) when running `npm run lint`.
* Create a pull request to this repository and ensure that the CI build succeeds.

## Bonus

Each assignment will have a bonus section. Each bonus section is optional and provides an extra challenge if you choose to complete it. Completing the bonus section will not be checked and does not result in extra credit. It's mainly for your benefit!

1. Complete some [ES2015 Katas](https://jskatas.org/#bundle-es6-katas). These are similar to the homework, where you change code in order to have tests pass. You can also learn about other ECMAScript features that we won't cover in class. Recommended sections:
    * Promises
    * Arrays
    * Class
    * Destructuring
    * Generators
    * Object literals
    * Strings/template strings
    * Arrow functions
    * Rest/spread operators
