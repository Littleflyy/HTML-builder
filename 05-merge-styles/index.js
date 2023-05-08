
const fs = require('fs');
const { join } = require('path');
const path = require('path');
const fsPromises = fs.promises;
let data = [];

fs.rm('05-merge-styles/project-dist/bundle.css', function(err) {
  if (err) {
    console.log(err);
  }
});

fs.readdir("05-merge-styles/styles", (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    let ext = path.extname(file);
    let addres = path.join('05-merge-styles', 'styles/', file);
    
    if (ext === ".css") {
      data.push(fs.promises.readFile(addres, 'utf-8'));
      console.log(data);
      Promise.all(data).then(data => {
        fs.promises.writeFile('05-merge-styles/project-dist/bundle.css', data.join(''));
      });
    }
  });
});