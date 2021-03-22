'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/login', controller.user.register);
	router.post('/user', controller.user.info);
	router.post('/addShippingList', controller.user.addShippingList);
};
