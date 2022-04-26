import people from './people.json';

people.forEach((person) => {
  const { name } = person;
  const { email, phone } = person;
  const [firstName, lastName] = name.split(' ');

  console.log(
    `First name: ${firstName}
Last name: ${lastName}
Email: ${email} 
Phone number: ${phone}
`,
  );
});
