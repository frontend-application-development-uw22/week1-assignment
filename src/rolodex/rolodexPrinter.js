import people from './people.json';

people.forEach((person) => {
  let names = person.name.split(' ');
  let firstName = names[0];
  let lastName = names[1];
  let email = person.email;
  let phone = person.phone;
  console.log('First name: ' + firstName + '\nLast name: ' + lastName + '\nEmail: ' + email + '\nPhone number: ' + phone + '\n');
});
