const encPass = require('../../../lib/helpers/Encrypt');

const hashedPass = encPass.generateHash('Aa123!!!');

const user = {
  user1: {
    firstname: '',
    lastname: '',
    email: 'test@test.com',
    password: 'Aa123!',
  },
  user2: {
    firstname: 'te',
    lastname: 'test1',
    email: 'test@test.com',
    password: 'Aa123!',
  },
  user3: {
    firstname: 'test',
    lastname: 'test1',
    email: 'testtest.com',
    password: 'Aa123!',
  },
  user4: {
    firstname: 'test',
    lastname: 'test1',
    email: 'test@test.com',
    password: 'Aa123',
  },
  user5: {
    firstname: 'trial',
    lastname: 'trial2',
    email: 'test@test.com',
    password: 'Aa123!!!',
  },
  user6: {
    firstname: 'trial',
    lastname: 'trial2',
    email: 'test@test2.com',
    password: hashedPass,
  },
};

const userExist = [
  {
    firstName: 'trial',
    lastName: 'trial2',
    email: 'test@test.com',
    password: hashedPass,
  },
];


module.exports = { user, userExist };
