#!/usr/bin/env node
const addIsAwesome = function (baseString, cb) {
  cb(baseString + ' is awesome');
};

export { addIsAwesome };
