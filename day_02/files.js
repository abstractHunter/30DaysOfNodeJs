var fs = require("fs")

var filename = "./text.txt"


// ########################## Read a file
// asynchronously
fs.readFile(filename, (err, data) => {
    if (err) throw err;
    console.log("Asynchronous : " + data);
});

// synchronously
var content = fs.readFileSync(filename);
console.log("Synchronous : " + content);



// ########################## Write a file
// asynchronously
var content = "console.log('hehehe')";
fs.writeFile("write_test1.js", content, (err) => {
    if (err) throw err;
    console.log("File written asynchronously successfully !");
});

// synchronously
fs.writeFileSync("write_test2.js", content);
console.log("File written synchronously successfully !");


// ########################## Append a file
let new_data = "Data to append";

// asynchronously
fs.appendFile("text.txt", new_data, (err) => {
    if (err) throw err;
    console.log("Appended asynchronously");
});

// synchronously
fs.appendFileSync("text.txt", new_data);
console.log("Appended synchronously");


// ########################## Rename a file

fs.rename("text.txt", "text1.txt", (err) => {
    if (err) throw err;
    console.log("asynchronous renaming");
});
fs.renameSync("text1.txt", "text.txt");
console.log("synchronous renaming");


// ########################## Delete a file
fs.unlink(filename, (err) => {
    if (err) throw err;
    console.log("Deleted asynchrously");
})
fs.unlinkSync(filename);
console.log("deleted synchronously");