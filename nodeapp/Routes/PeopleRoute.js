const express = require('express');

const router = express.Router();
const PeopleController = require('../Controllers/peopleController');

router.get('/name/:peoplename', PeopleController.getallpeoplename);
router.get('/:peopleId',PeopleController.getPeopleById);
router.get('/',PeopleController.getallpeople);
app.use(cors({origin :'http://localhost:4200'}));

module.exports = router;