const fs = require('fs');
import { createFiles } from './file-maker';
import { readDirectory, renameEverything } from './rename-files';

describe('rename funcs', () => {
  afterEach(done => {

  });
  it('gets all files in target dir', done => {
    readDirectory('./fixtures', (err, files) => {

    });
  });

  it('gets modified time', () => {

  });

  it('gets the contents of a file', done => {
    fs.readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, expectedContent) => {

    });
  });

  it('renames all files in a folder to content-f', done => {
    renameEverything('./fixtures', err => {
      expect(err).toBeFalsy();

      fs.readdir('./fixtures', (err, files))
    })
  })

});
