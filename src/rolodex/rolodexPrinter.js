import people from './people.json';

const information = () => {
  people.forEach((person) => {
    const { names } = person.name.split(' ');
    const { firstName } = names[0];
    const lastName = names[1];
    const { email } = person.email;
    const { phone } = person.phone;
    const response = `First name: ${firstName} \nLast name: ${lastName} \nEmail:  ${email} \nPhone number:  + ${phone} \n`;
    return response;
  });
};

information();
