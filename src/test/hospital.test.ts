import { getAPatient, linkHospitalToPatient } from './../services/hospital.service';
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import db from '../database/models';
import { registerAHospital, registerAPatient } from '../services/auth.service';


describe('Hospital-link', async() => {
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

    beforeEach(async () => {
        await db.patient.destroy({ where: {}, truncate: true})
        await db.hospital.destroy({ where: {}, truncate: true})

        hospital = await registerAHospital(sample_hospital);
        newPatient = await registerAPatient(hospital.id, sample_patient);
        // console.log(newPatient);

    })

    it('should link a hospital to a patient', async() => {
        const result = await linkHospitalToPatient(sample_patient.patientId, hospital.id)
        assert.equal(newPatient.id, result[0].id_patient)
        assert.equal(hospital.id, result[0].id_hospital)
    })
})