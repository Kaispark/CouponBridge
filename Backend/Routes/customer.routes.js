const customerController = require('../Controllers/customer.controllers.js');

const customerRouter = ( app ) => {
        // Customer signup
        app.post('/cb/v1/api/customers/signup', customerController.signUp);
}

module.exports = customerRouter;