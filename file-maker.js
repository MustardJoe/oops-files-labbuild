const fs = require('fs');

//here is my func that creates the files - i ran it in node instead of 
//turning it into a proper function and calling it because I didn't
//want it to be easey to use, since we are writing a function that
//duplicates an accident (and creates 100 files)
for(let i = 0; i < 100; i++) {
  
  let data = '';

  if(i < 15) {data = 'dinosaurs';}
  else if(i < 30) {data = 'velociraptor';}
  else if(i < 45) {data = 'HobGoblin';}
  else if(i < 60) {data = 'forest bat';}
  else if(i < 75) {data = 'wereBear';}
  else if(i < 100) {data = 'Green Slime';}

  fs.writeFile((`./oops-files/${i}.txt`), data, (err) => {
    if(err) return console.error(err);
  });
}
