var crypto = require('crypto');

//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
algorithm = 'aes-256-ctr';
password = 'MySecretPasswordKeyof32charslen!';
iv = crypto.randomBytes(16); // initialization vector


function encrypt(text) {
    var cipher = crypto.createCipheriv(algorithm, password, iv);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}


//Text is the Cipher which we need to decrypt using 'password'(Key).
function decrypt(text) {
    var decipher = crypto.createDecipheriv(algorithm, password, iv);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

//Actual content
var text = "Hello World !!!";
//Calling the encrypt function and printing the encrypted content				
var e = encrypt(text);
console.log(e);
//calling the decrypt function and printing the decrypted content
var d = decrypt(e);
console.log(d);