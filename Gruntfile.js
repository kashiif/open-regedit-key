'use strict';

/*******************************************
* Author: Kashif Iqbal Khan
* Email: kashiif@gmail.com
* License: MIT
* Copyright (c) 2013-2014 Kashif Iqbal Khan
********************************************/

module.exports = function(grunt) {

 var path  = require('path'),
      builder = require('grunt-firefox-xpi-builder');

  var pkg = grunt.file.readJSON('package.json');

  var options = {
      pkg: pkg,
      srcDir: './src/',  // Path of directory where source code resides
      distDir: './dist/',
      tempDir: './dist/temp/'
  };

  builder(grunt, options);

  // Default task(s).
  grunt.registerTask('default', ['build']);  
};