const Customer = require('../Models/customer.model.js');

const create = async (data) => {
    try {
        const customer = await Customer.create(data);
        return customer;
    } catch(error) {
        console.log(error);
        if(error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}

module.exports = {
    create
}