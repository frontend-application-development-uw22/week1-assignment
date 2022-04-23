import people from './people.json';

const{name, email, phone} = person;

people.forEach(function (person) {
firstName = person.name;
lastName = person.name;
email = person.email;
phone = person.phone;

  console.log(`First name:${firstName}\nLast name:${lastName}\nEmail:${email}\nPhone number:${phone}\n' `);
});

// people.forEach(function (person) {
//   const names = person.name.split(' ');
//   const firstName = names[0];
//   const lastName = names[1];
//   const email = person.email;
//   const phone = person.phone;

//   console.log('First name: ' + firstName + '\nLast name: ' + lastName + '\nEmail: ' + email + '\nPhone number: ' + phone + '\n');
// });

