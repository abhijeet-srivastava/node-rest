/**
 * Created by a.srivastava on 6/19/17.
 */

var  LineByLineReader = require('line-by-line');


    lr = new LineByLineReader('ContactList.txt');

lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
    console.log(line);
});

lr.on('end', function () {
    // All lines are read, file is closed now.
});
