process.env.NODE_ENV='test'
import mongoose from 'mongoose'
import {User} from '../models/user.js';
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../index.js'
const should=chai.should()
const expect = chai.expect;
chai.use(chaiHttp)


let register_requirements={
    'name':'tytyne Flora',
    'email':'dusaflora4@gmail.com',
    'password':'florentine'
}
let login_requirements={
    'email':'dusaflora4@gmail.com',
    'password':'florentine'

}

describe('/api/register',()=>{
    it('it should register a user',(done)=>{
        chai.request(server)
        .post('/api/register')
        .send(register_requirements)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            done() 
        })
    })

})


describe('/GET queries', () => {
    it('it should GET all the queries', (done) => {
      chai.request(server)
          .get('/api/queries')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});


describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
          .get('/api/users')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});

describe('/GET articles', () => {
    it('it should GET all articles', (done) => {
      chai.request(server)
          .get('/api/articles')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});




