var routes = require('../routes');
var con = require('../db');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);


describe('/REGISTER user', () => {
  it('It registers correctly and returns the token.', (done) => {
    chai.request(routes)
      .post('/users/register')
      .send({
        name: 'test',
        surname: 'test',
        username: 'test',
        email: 't@t.com',
        password: '123456'
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('token').be.a('string');
        done();
      });
  });
  it('It does not insert a duplicated user.', (done) => {
    chai.request(routes)
      .post('/users/register')
      .send({
        name: 'test',
        surname: 'test',
        username: 'test',
        email: 't@t.com',
        password: '123456'
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('code').eql('ER_DUP_ENTRY');
        done();
      });
  });
});

describe('/LOGIN user', () => {
  it('It logs in correctly and returns the token.', (done) => {
    chai.request(routes)
      .post('/users/login')
      .send({
        email: 't@t.com',
        password: '123456'
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('token').be.a('string');
        done();
      });
  });
});
