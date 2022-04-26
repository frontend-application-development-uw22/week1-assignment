import people from './people.json';

people.forEach((person) => {
  const { firstName, lastName } = person.name.split(' ');
  const { email, phone } = person;

  console.log(
    `First name: ${firstName}
  Last name: ${lastName}
  Email: ${email} 
  Phone number: ${phone}
  `,
  );
});
