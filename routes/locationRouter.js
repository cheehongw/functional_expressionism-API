var express = require('express');
var locationRouter = express.Router();
var getLocationXS = require('../controllers/getLocationXS')
var getLocationDetails = require('../controllers/getLocationDetails')
var handleRating = require('../controllers/handleRating');
var getStallXS = require('../controllers/getStallXS')
var validateToken = require('../controllers/validateToken');

/* return a list of locations */
locationRouter.get('/', getLocationXS);

/* return the information associated with the location */
locationRouter.get('/:locationID', getLocationDetails);

/**
 * return the stall list of the location
 * query params: 
 *      verbose - default true - returns full details of stalls, else return just the objectID
 */
locationRouter.get('/:locationID/stalls', getStallXS);

locationRouter.use('/:locationID/rate', validateToken, handleRating);

module.exports = locationRouter;
 