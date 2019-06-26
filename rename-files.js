const fs = require('fs');

const readDirectory = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
};

const rename = (path, newPath, callback);


const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if(!stats) return callback(err);
    callback(err, stats.mtime.toISOString());
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
    callback(err, file);
  });
};

module.exports = {
  readDirectory,
  rename,
  getModifiedTime,
  readFile,
};
