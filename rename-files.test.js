const fs = require('fs');
import { createFiles } from './file-maker';
import { readDirectory } from './rename-files';

describe('rename funcs', () => {
  afterEach(done => {

  });
  it('gets all files in target dir', done => {
    readDirectory('./fixtures', (err, files) => {

    });
  });

  it('gets modified time', () => {
    
  })
});
