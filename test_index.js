// This gets replaced by webpack with the updated files on rebuild
var __webpackManifest__ = [];

// require all modules ending in ".test" from the
// src directory and all subdirectories
var testsContext = require.context("./src", true, /\.test$/);

function inManifest(path) {
  return __webpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest);

// // Run all tests if we didn't find any changes
if (!runnable.length) {
  runnable = testsContext.keys();
}

runnable.forEach(testsContext);
