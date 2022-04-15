import people from './people.json';

people.forEach((person) => {
  // const names = person.name.split(' ');
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');
  // const firstName = names[0];
  // const lastName = names[1];
  // const { email } = person;
  // const { phone } = person;

  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
