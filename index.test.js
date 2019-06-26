const fs = require('fs');

describe('test suite for file oops thing', () => {
  it('reads the contents of a file', () => {
    fs.readFile('./oops-files/63.txt', { encoding: 'utf8' }, (err, data) => {
      if(err) return console.error(err);
      
      expect(data).toEqual('wereBat');
    });

  });
});
