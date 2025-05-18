const Joi = require('joi');

const booleanLike = Joi.boolean()
  .truthy('true')
  .truthy('on')
  .falsy('false')
  .falsy('off');

module.exports.ListingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),

    country: Joi.string().required(),
    location: Joi.string().required(),

    // Room booking fields
    roomType: Joi.string().valid("single", "shared", "studio", "ensuite").required(),
    furnished: Joi.string().valid("furnished", "unfurnished", "semifurnished").required(),
    genderPreference: Joi.string().valid("male", "female", "any").required(),
    preferredTenants: Joi.string().valid("students", "professionals", "family", "couples", "any").required(),

    immediateAvailability: booleanLike.required(),
    availableFrom: Joi.date().optional(),

    // Nested objects with booleans accepting string equivalents
    amenities: Joi.object({
      attachedBathroom: booleanLike.optional(),
      kitchenAccess: booleanLike.optional(),
      wifi: booleanLike.optional(),
      ac: booleanLike.optional(),
      laundry: booleanLike.optional(),
      parking: booleanLike.optional(),
    }).optional(),

    rules: Joi.object({
      smoking: booleanLike.optional(),
      pets: booleanLike.optional(),
      guests: booleanLike.optional(),
      curfew: booleanLike.optional(),
      curfewDetails: Joi.string().allow("", null).optional(),
    }).optional(),

    securityDeposit: Joi.number().min(0).optional(),
    minStayMonths: Joi.number().min(1).optional(),

    bills: Joi.object({
      included: booleanLike.optional(),
      details: Joi.string().allow("", null).optional(),
    }).optional(),

  }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});