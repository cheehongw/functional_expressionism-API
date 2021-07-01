var express = require('express');
var locationRouter = express.Router();
var getLocationXS = require('../controllers/getLocationXS')
var getLocationDetails = require('../controllers/getLocationDetails')
var getStallDetails = require('../controllers/getStallDetails')

/* return a list of locations */
locationRouter.get('/', getLocationXS);

/* return the information associated with the location */
locationRouter.get('/:locationID', getLocationDetails);

/* return the stall list of the location, option: verbose */
locationRouter.get('/:locationID/stalls', getLocationDetails);

module.exports = locationRouter;
 