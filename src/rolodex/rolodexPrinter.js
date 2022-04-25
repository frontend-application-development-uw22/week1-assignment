import people from './people.json';

people.forEach((person) => {
  const { name } = person;
  const { email } = person;
  const { phone } = person;
  const [firstName, lastName] = name.split(' ');

  console.log(`First name: ${firstName} Last Name:  ${lastName} Email: ${email} Phone: ${phone}`);
});
