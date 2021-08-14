const express = require('express');
const {
  getAllChilds,
  getChild,
  getState,
  createState,
  getDistrict,
  createDistrict,
} = require('../controllers/listingController');

const router = express.Router();

router.get('/getAllChilds', getAllChilds);
router.get('/getChild/:id', getChild);
router.get('/getState', getState);
router.get('/getDistrict', getDistrict);
//router.post('/createChild', listingController.createChild);
router.post('/createState', createState);
router.post('/createDistrict', createDistrict);

module.exports = router;
