import people from './people.json';

people.forEach((person) => {
  const names = person.name.split(' ');
  const [firstName, lastName] = names;
  const { email, phone } = person;

  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email}\nPhone number: ${phone}\n`);
});
