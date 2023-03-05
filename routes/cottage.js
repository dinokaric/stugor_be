const cottageController = require('../controllers/cottage');
const router = require('express').Router();

router.get('/available', cottageController.available); // tillgängliga stugor
router.get('/:id', cottageController.get); // detaljer om stuga
router.post('/book/:id', cottageController.book); // boka en stuga

module.exports = router;