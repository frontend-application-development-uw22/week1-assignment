import people from './people.json' assert {type: "json"};

people.forEach(function (person) {
  const [firstName, lastName] = person.name.split(' ');
  const { email, phone } = person;

  console.log(`First name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone Number: ${phone}`)
});
