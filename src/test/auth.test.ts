import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { getAHospital, registerAHospital } from '../auth/auth.service';
import db from '../database/models';


before(async()=>{
    
    await db.sequelize.truncate({ cascade: true })
})

describe('Hospital:', () => {
    const data = {
        name: 'test hospital',
        address: 'test addr',
        domain: 'www.test.com',
        email: 'test@gmail.com',
        phoneNumber: '08056965067',
        hospital_reg: '53627737'
    }

    it('should register a hospital', async () => {

        const h = await registerAHospital(data);
        const result = h.get({ plain: true }) // convert to js object
        assert.equal(result.name, 'test hospital')
        assert.include(result, data)
    })

    it('should get an hospital details', async() => {
        const result = await getAHospital('53627737')
        assert.equal(result.name, 'test hospital')
    })
})