const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');
const couponService = require('../Services/coupon.services.js');

const createCoupon = async (req, res) => {
    try {
        const response = await couponService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The coupon created successfully.";
        res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to create the coupon.";
        res.status(500).json(errorResponseBody);
    }
}

const getAllCoupons = async (req, res) => {
    try {
        const response = await couponService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = "Coupons fetched successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to fetch coupons.";
        res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createCoupon,
    getAllCoupons
}