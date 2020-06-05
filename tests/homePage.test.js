import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);
describe('Testing the homepage', () => {
  it('Should return the homepage', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Welcome to UB HomePage');
        done();
      });
  });
})

describe('Page Not Found', () => {
    it('Should return an error when the page does not exist', (done) => {
      chai
        .request(app)
        .get('/fd')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          expect(res.body.error.message).to.eql('Page Not found');
          done();
        });
    });
  })
