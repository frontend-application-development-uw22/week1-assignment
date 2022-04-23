import people from './people.json';

people.forEach((person) => {
  const ps = person;
  const { name, email, phone } = ps;
  const names = name.split(' ');
  const [firstName, lastName] = names;
  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email}'\nPhone number: ${phone}\n`);
});
