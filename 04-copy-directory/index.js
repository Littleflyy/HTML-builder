
const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

function copyDir() {
  fs.readdir("files", (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      let names = file.toString();
      let addres = path.join('files/', names);
      let addres2 = path.join('files-copy/', names);
      fsPromises.mkdir('files-copy', { recursive: true }, (err) => {
        if (err) {
          return err;
        }
      });
      let input = fs.createReadStream(addres);
      let output = fs.createWriteStream(addres2);
      input.pipe(output);

    });
    return "Directory was copied!"
  });
}

copyDir();