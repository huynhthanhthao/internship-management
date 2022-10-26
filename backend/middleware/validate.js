import Joi from "joi";

const validateParam = (schema, name) => {
    return (req, res, next) => {
        const validateResult = schema.validate({ param: req.params[name] });

        if (validateResult.error) {
            return res.status(400).json(validateResult.error);
        } else {
            if (!req.value) req.value = {};
            if (!req.value["params"]) req.value.params = {};
            req.value.params[name] = req.params[name];
            next();
        }
    };
};

const validateBody = (schema) => {
    return (req, res, next) => {
        const validateResult = schema.validate(req.body);

        if (validateResult.error) {
            return res.status(400).json(validateResult.error);
        } else {
            if (!req.value) req.value = {};
            req.value.body = validateResult.value;
            next();
        }
    };
};

const schema = {
    idSchema: Joi.object().keys({
        param: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),

    usernameSchema: Joi.object().keys({
        param: Joi.string()
            .regex(/^[0-9a-zA-Z]/)
            .required(),
    }),

    accountSchema: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        name: Joi.string().required(),
        email: Joi.string().email(),
        phoneNumber: Joi.string().min(10).max(13),
        urlAvatar: Joi.string(),
    }),

    updateSchema: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        phoneNumber: Joi.string().min(10).max(13),
        urlAvatar: Joi.string(),
        address: Joi.string(),
        message: Joi.string(),
    }),

    assessCompanySchema: Joi.object().keys({
        disPoints: Joi.string(),
        techPoint: Joi.string(),
        resultPoint: Joi.string(),
        message: Joi.string(),
    }),

    assessTaskSchema: Joi.object().keys({
        status: Joi.string(),
        assess: Joi.string(),
    }),
};

export { validateParam, validateBody, schema };
