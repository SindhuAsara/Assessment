const fs = require('fs');
const util = require('util');

const crypto = require("crypto");
const eccrypto = require("eccrypto");

const privateKey = eccrypto.generatePrivate();
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


async function writeEncryptedData() {
try {
let data = await readFile("./sampleInput.txt");
let encryptedData = crypto.createHash("sha256").update(data).digest();
let sign = await eccrypto.sign(privateKey, encryptedData)
await writeFile("./sampleOutput.txt", encryptedData)
} catch (err) {
console.log(err)
}
}
writeEncryptedData()