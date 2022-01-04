import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { registerAHospital } from '../services/auth.service';
import db from '../database/models';
import { getAHospital, getAHospitalByEmail } from '../services/hospital.service';


before(async () => {

    await db.sequelize.truncate({ cascade: true })
})

describe('Register Hospital:', () => {
    let result;
    beforeEach(async() => {
        const data = {
            name: 'test hospital',
            address: 'test addr',
            domain: 'www.test.com',
            email: 'test@gmail.com',
            phoneNumber: '08056965067',
            password: '5362'
        }
        await db.sequelize.truncate({ cascade: true })
        result = await registerAHospital(data);
    })


    it('should register a hospital', async () => {
        assert.equal(result.name, 'test hospital', 'successfully registered hospital')
    })
    it('returned hospital details should not include hashed password', async () => {
        assert.notProperty(result, 'password', 'password not included in returned value')
    })


   
})

describe('login Hospital:', () => {
    let result;
    beforeEach(async() => {
     
        await db.sequelize.truncate({ cascade: true })
        result = await getAHospitalByEmail('')
    })   
})