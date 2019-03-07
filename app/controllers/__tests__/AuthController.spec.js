const request = require('supertest');
const app = require('../../app');
const { user, userExist } = require('../../../database/__mocks__/mockData');
const db = require('../../../database/models');

describe('Test Suite for Sign up', () => {
  beforeAll(async () => {
    await db.User.destroy({ force: true, truncate: { cascade: true } });
    await db.User.bulkCreate(userExist);
  });
  afterAll(async () => {
    await db.User.destroy({ force: true, truncate: { cascade: true } });
  });

  it('Test required sign up fields', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user1)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toEqual('The firstname, lastname, email and password fields are required!');
        if (err) return done();
        done();
      })
  });

  it('Test first name less than three', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user2)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toEqual('Firstname should have at least 3 letters');
        if (err) return done();
        done();
      })
  });

  it('Test wrong email format', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user3)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toEqual('Email should have the format user@mail.com');
        if (err) return done();
        done();
      })
  });

  it('Test wrong password format', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user4)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toEqual('Password should contain capital and small letters, numbers and special characters e.g. @,#,!');
        if (err) return done();
        done();
      })
  });

  it('Test existing user', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user5)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toEqual('Sorry, a user with the email test@test.com already exists');
        if (err) return done();
        done();
      })
  });

  it('Test register a new user', (done) => {
    request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.user6)
      .expect(201)
      .end((err, res) => {
        expect(res.body.success).toBeTruthy();
        expect(res.body.message).toEqual('User created successfully');
        if (err) return done();
        done();
      })
  });
});
