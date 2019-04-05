var crypto = require('crypto');

var fs = require('fs');
var contents = fs.readFileSync('sample.txt', 'utf8' );
console.log(contents);
var sha256 = crypto.createHash('sha256').update(contents).digest("hex");
console.log(`sha256 of sample.txt is ${sha256}`);
fs.writeFileSync('sample_sha256', sha256 , 'utf-8');