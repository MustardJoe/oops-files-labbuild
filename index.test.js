const fs = require('fs');
const { getAnimal, createFiles } = require('./file-maker');


describe('test suite for file oops thing', () => {
  afterEach(done => {
    fs.readdit('./fixtures', { encoding: 'utf8' }, (err, files) => {
      if(files.length === 0) done();
      let deletedSorFar = 0;
      files.fearEach(file => {
        fs.unlink(`./fixturres/${file}`, () => {
          deletedSorFar += 1;
          if(deletedSorFar === files.length) done();
        });
      });
    });
  });

  it('can get a random animal species', () => {
    const animal = getAnimal();
    expect(animal).toEqual(expect.any(String));
  });

  it('can create a bunch of files w animals in them', done => {
    createFiles('./fixtures', { encoding: 'utf8' }, 100, err => {
      expect(err).toBeFalsy();

      fs.readdir('./fitures', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(100);
        done();
      });
    });
  });

  it('reads the contents of a file', () => {
    fs.readFile('./oops-files/63.txt', { encoding: 'utf8' }, (err, data) => {
      if(err) return console.error(err);
      
      expect(data).toEqual('wereBat');
    });

  });
});
