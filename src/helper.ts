// import * as Validator from 'validatorjs';
// import {Validator} from 'validatorjs';
let Validator = require('validatorjs');

export const checkValidity = (data, rule) => {
    let validation = new Validator(data, rule);
    if (validation.fails()) {
        // get all the fields name with errors
        const errorFieldList = Object.keys(validation.errors.errors)
        // select the first error of the first field
        const err = validation.errors.errors[errorFieldList[0]][0]
        return err
    } else {
        // return empty array if no error
        return ''
    }
}