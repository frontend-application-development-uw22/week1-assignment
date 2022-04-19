import people from './people.json';

people.forEach((person) => {
  const { names, email, phone } = person;
  const [firstName, lastName] = names.split(' ');

  console.log(
    `First name: ${firstName}\nLast name: ${lastName}\nEmail:${email}\nPhone number: ${phone}\n`,
  );
});
