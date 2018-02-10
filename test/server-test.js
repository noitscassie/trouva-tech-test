'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /products', () => {
  it('should return status code 200', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('GET /collections', () => {
  it('should return status code 200', (done) => {
    chai.request(server)
      .get('/collections')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
