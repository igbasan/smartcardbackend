import { getAPatient } from './../services/hospital.service';
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { registerAHospital, registerAPatient } from '../services/auth.service';
import db from '../database/models';
import { getAHospital, getAHospitalByEmail, updateHospitalProfile } from '../services/hospital.service';
import { hospitalUpdate, patient } from '../interface/auth.interface';


before(async () => {
    await db.sequelize.truncate({ cascade: true })
})

describe('Hospital:', async() => {
    let result;
    const data = {
        name: 'test hospital',
        address: 'test addr',
        domain: 'www.test.com',
        email: 'test@gmail.com',
        phoneNumber: '08056965067',
        password: '5362',
        hospital_reg: '111'
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

    it('should update an hospital', async () => {
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

describe('Hospital-patient:', () => {
    let hospital;
    let newPatient;
    const sample_hospital = {
        name: 'test hospital',
        address: 'test addr',
        domain: 'www.test.com',
        email: 'test@gmail.com',
        phoneNumber: '08056965067',
        password: '5362',
        hospital_reg: "01"
    }

    const sample_patient = {
        firstName: "williams",
        lastName: "shakespare",
        email: "shakes@gmail.com",
        phoneNumber: "08056965037",
        dateOfBirth: "05/22/2021",
        patientId: "01-00001"
    }
    before(async()=> {
        await db.sequelize.truncate({ cascade: true })
        hospital = await registerAHospital(sample_hospital);
    })

    beforeEach(async () => {
        await db.patient.destroy({ where: {}, truncate: true})
        newPatient = await registerAPatient(hospital.id, sample_patient);
    })

    it('should register a patient', async () => {
        
        assert.equal(newPatient.firstName, sample_patient.firstName)
        assert.equal(newPatient.lastName, sample_patient.lastName)
        assert.equal(newPatient.email, sample_patient.email)
    })
    it('maps hospital to the registered patient', async () => {
        const hospital_patient = await db.hospital_patient.findOne({ where: {id_patient: newPatient.id, id_hospital: hospital.id}})
        assert.equal(hospital_patient.id_hospital, hospital.id)
        assert.equal(hospital_patient.id_patient, newPatient.id)
    })
    it('should get a patient by the patient id', async() => {
        const fetched_patient = await getAPatient(sample_patient.patientId, hospital.id);
        assert.equal(fetched_patient.patientId, sample_patient.patientId)
        assert.equal(fetched_patient.firstName, sample_patient.firstName)
    })

})