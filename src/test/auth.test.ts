import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { registerAHospital } from '../auth/auth.service';
import db from '../database/models';


before(async()=>{
    
    await db.sequelize.truncate({ cascade: true })
})

describe('Hospital:', () => {
    it('should register a hospital', async () => {
        const data = {
            name: 'test hospital',
            address: 'test addr',
            domain: 'www.test.com',
            email: 'test@gmail.com',
            phoneNumber: '08056965067',
            hospital_reg: '53627737'
        }
        try {
            let result = await registerAHospital(data);
            result = result.dataValues;
            // expect(result).to.equal(data)
            expect(result).to.have.all.keys('pi')
            // expect(result).to.have.property('address')
            // expect(result).to.have.property('domain')
            // expect(result).to.have.property('email')
            // expect(result).to.have.property('phoneNumberss')
            // expect(result).to.have.property('hospital_reg')
            console.log(result)
        } catch (error) {
            
        }
    })
})