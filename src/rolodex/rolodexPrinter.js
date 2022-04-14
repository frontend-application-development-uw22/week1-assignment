import people from './people.json';

people.forEach(function (person) {
  const names = person.name.split(' ');
  const firstName = names[0];
  const lastName = names[1];
  const email = person.email;
  const phone = person.phone;

  console.log('First name: ' + firstName + '\nLast name: ' + lastName + '\nEmail: ' + email + '\nPhone number: ' + phone + '\n');
});
