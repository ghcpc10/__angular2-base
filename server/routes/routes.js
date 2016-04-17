var express = require('express'),
    router = express.Router(),
    indexCtrl = require('../controllers/indexCtrl'),
    comp01Ctrl = require('../controllers/comp01Ctrl'),
    comp02Ctrl = require('../controllers/comp02Ctrl'),
    comp03Ctrl = require('../controllers/comp03Ctrl');


module.exports = function() {
  // index
  router.get('/', indexCtrl.redirectToHomePage);
  router.get('/main', indexCtrl.redirectToHomePage);
  router.get('/home', indexCtrl.index);

  // comp01
  router.get('/comp01', comp01Ctrl.index);

  // comp02
  router.get('/comp02', comp02Ctrl.index);
  router.get('/comp02/sec01', comp02Ctrl.index);
  router.get('/comp02/sec02', comp02Ctrl.index);
  router.get('/comp02/sec02/:page', comp02Ctrl.index);

  // comp03
  router.get('/comp03', comp03Ctrl.index);
  router.get('/comp03/sec01', comp03Ctrl.index);
  router.get('/comp03/sec02', comp03Ctrl.index);
  router.get('/comp03/sec03', comp03Ctrl.index);

  return router;
};