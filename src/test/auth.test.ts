import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { registerAHospital } from '../services/auth.service';
import db from '../database/models';
import { getAHospital, getAHospitalByEmail, updateHospitalProfile } from '../services/hospital.service';
import { hospitalUpdate } from '../interface/auth.interface';


before(async () => {

    await db.sequelize.truncate({ cascade: true })
})

describe('Hospital:', () => {
    let result;
    const data = {
        name: 'test hospital',
        address: 'test addr',
        domain: 'www.test.com',
        email: 'test@gmail.com',
        phoneNumber: '08056965067',
        password: '5362'
    }
    beforeEach(async () => {
        
        await db.sequelize.truncate({ cascade: true })
        result = await registerAHospital(data);
    })


    it('should register a hospital', async () => {
        assert.equal(result.name, 'test hospital', 'successfully registered hospital')
    })
    it('returned hospital details should not include hashed password', async () => {
        assert.notProperty(result, 'password', 'password not included in returned value')
    })

    it('should fetch an hospital by email', async () => {
        const hospital = await getAHospitalByEmail(data.email);
        assert.equal(data.name, hospital.name);
        assert.notProperty(result, 'password', 'password not included in returned value')
    })

    it('should update an hospital', async() => {
        const updateInfo: hospitalUpdate = {
            name: 'update hospital',
            address: 'test addr',
            domain: 'www.test.com',
            email: 'test@gmail.com',
            phoneNumber: '08056965067'
        }
        updateHospitalProfile(result.id, updateInfo)
        const updatedHospitalInfo = await getAHospital(result.id);
        assert.equal(updateInfo.name, updatedHospitalInfo.name);
    })
})