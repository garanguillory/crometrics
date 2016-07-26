#!/usr/bin/env node
'use strict';

// copies everything from ./lib/ into the top level directory
// so that it can be accessed via an easier api as:
// import module from 'crometrics/module';
var fs = require('fs');
var path = require('path');

var dirname = path.resolve(__dirname,'../lib');

var dirs = [];

try { dirs = fs.readdirSync(dirname); }catch(e) {}

dirs.forEach(function (op) {
  if (op.charAt(0) === '.') return;
  var from = dirname + path.sep + op;
  var fromArray = from.split(path.sep);
  fromArray.splice(fromArray.lastIndexOf('lib'), 1);
  var to = fromArray.join(path.sep);
  //console.log('op:', op, 'from:', from, 'to:', to);
  fs.renameSync(from, to);
});

