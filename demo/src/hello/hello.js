import fs from 'fs';
import path from 'path';

export default function () {
  const file = path.join(__dirname, 'hello.txt');

  fs.readFile(file, function (err, txt) {
    if (err) {
      throw err;
    }

    console.log(txt.toString());
  });
}
