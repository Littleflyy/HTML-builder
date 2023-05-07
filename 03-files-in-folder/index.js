const fs = require('fs');
const path = require('path');

fs.readdir("./03-files-in-folder/secret-folder", { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.isFile()) {
      let ext = path.extname(file.name.toString());
      let nam = path.parse(file.name).name;
      let pathFile = path.join('./03-files-in-folder', 'secret-folder/', file.name);
      fs.stat(pathFile, (err, stats) => {
        if (err) {
          throw err;
        }
        let sizes = stats["size"];
        console.log("%s - %s - %s", nam, ext, sizes);
      });
    }
  });
});


