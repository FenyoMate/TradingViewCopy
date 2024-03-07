const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        //const UserModel = requireOption(objectrepository, 'UserModel');
        console.log('getLogin');
        next();
    };
};
