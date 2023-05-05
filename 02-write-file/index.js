const { stdin, stdout } = process;
const fs = require('fs');
stdout.write('Enter the text \n');

  stdin.on('data', data => {
    let dt = Buffer.from(data, 'utf-8').toString();
    if (dt.includes(".exit")) {
      process.exit();
    }
    else {
      fs.appendFile("hello.txt", dt, function(error){
        if (error) throw error;
      });

    }
    
  });
