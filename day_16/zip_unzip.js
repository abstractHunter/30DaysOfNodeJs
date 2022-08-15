const zlib = require('zlib');
const fs = require('fs');
const stream = require("stream")

// ################################### zip
/* const gzip = zlib.createGzip();

const sourceZip = fs.createReadStream('afile.txt');
const destinationZip = fs.createWriteStream('file.txt.gz');

//Transform stream which is zipping the input file
stream.pipeline(sourceZip, gzip, destinationZip, (err) => {
    if (err) {
        console.error('An error occurred while zipping:', err);
        process.exitCode = 1;
    }
});
console.log("Zipped Successfully");
 */


// ################################### unzip
const unzip = zlib.createGunzip();

const sourceUnzip = fs.createReadStream('file.txt.gz');
const destinationUnzip = fs.createWriteStream('bfile.txt');

//Transform stream which is unzipping the input file
stream.pipeline(sourceUnzip, unzip, destinationUnzip, (err) => {
    if (err) {
        console.error('An error occurred while unzipping:', err);
        process.exitCode = 1;
    }
});
console.log("Unzipped Successfully");