// Refactor the code to use template literals.
//     * Refactor the code to use object destructuring.
//     * Refactor the code to use array destructuring.

import people from './people.json';

people.forEach((person) => {
  const {
    name,
    email,
    phone,
  } = person;

  const [firstName, lastName] = name.split(' ');

  console.log(`First name: '${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}`);
});
