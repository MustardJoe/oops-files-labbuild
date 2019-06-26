const fs = require('fs');


//here is my func that creates the files
for(let i = 0; i < 100; i++) {
  console.log(i);
  let data = i;
  fs.writeFile((`./oops-files/${i}.txt`), data, (err) => {
    if(err) return console.error(err);
  });
  
}

// fs.writeFile(('message2.txt'), data, (err) => {
//   if(err) return console.error(err);

// });

// template for func
// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
