const adminController = require('../controllers/admin');
const router = require('express').Router();

router.get('/booking/all', adminController.allBookings); // visa all bokningar

module.exports = router;