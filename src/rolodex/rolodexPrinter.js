import people from './people.json';

people.forEach((person) => {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');
  console.log(`First name: ${firstName} \n Last name: ${lastName} \n Email: ${email} \n Phone number: ${phone} \n`);
});
