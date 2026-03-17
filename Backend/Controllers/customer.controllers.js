const customerService = require('../Services/customer.services.js');
const { successResponseBody, errorResponseBody } = require('../Utils/responsebody.js');


const signUp = async (req, res) => {
    try {
        const response = await customerService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The customer signed up successfully.";
        res.status(201).json(successResponseBody);
    }catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to sign up the customer.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to sign up the customer.";
        res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    signUp
}