const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.js');

router.get('/api', (req, res) => res.status(200).send({
  message: 'OK',
}));

router.post('/api/users', usersController.create);
router.get('/api/users', usersController.list);
router.get('/api/users/:userId', usersController.retrieve);
router.put('/api/users/:userId', usersController.update);
router.delete('/api/users/:userId', usersController.destroy);

module.exports = router;