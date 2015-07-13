/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  // TODO: use mongodb
  let data = require('./../model/experience.json');

  res.send(JSON.stringify(JSON.stringify(data)));
});

module.exports = router;