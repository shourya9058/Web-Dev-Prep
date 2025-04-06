const Joi = require('joi');

module.exports.ListingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0), //minimum value 0 rakhdi jisse negative number na enter ho koi
        image: Joi.number().allow("",null), //null ho skti h kyuki image na dene pr bhi hume default link set kr rakha h
        country: Joi.string().required(),
        location: Joi.string().required(),
    }).required()
})