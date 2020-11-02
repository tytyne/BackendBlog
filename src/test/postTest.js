process.env.NODE_ENV='test'
import mongoose from 'mongoose'
import User from '../models/user.js';
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../index.js'
const should=chai.should()
const expect = chai.expect;
chai.use(chaiHttp)


let register_details={
    'name':'tytyne Flora',
    'email':'dusaflora4@gmail',
    'password':'florentine'
}

describe('register a user',()=>{
    it('it should reg')

})