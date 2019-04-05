var fs = require('fs');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createCipher('aes-256-cbc', key);
var input = fs.createReadStream('sample.txt');
var output = fs.createWriteStream('sample.txt.enc');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
 console.log('Encrypted file');

 var decipher = crypto.createDecipher('aes-256-cbc', key);
 var de_input = fs.createReadStream('sample.txt.enc');
 var de_output = fs.createWriteStream('sample.txt.dec');

 de_input.pipe(decipher).pipe(de_output);

 de_output.on('finish', function()
 {
     console.log('Decrypted fie');
 })
});