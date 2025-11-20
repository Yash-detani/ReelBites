const express = require('express');

const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})
 
/* POST /api/food/ [protected]*/
router.post('/', authMiddleware.authFoodPartnerMiddleware,upload.single("video"), foodController.createFood);

/* GET /api/food/ [protected]*/

router.get('/', authMiddleware.authUserMiddleware, foodController.getFoodItems);

router.get('/like', authMiddleware.authUserMiddleware, foodController.likeFoodItem);

router.post('/save', authMiddleware.authUserMiddleware, foodController.saveFoodItem);
 
module.exports = router;