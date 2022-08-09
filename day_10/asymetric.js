const crypto = require("crypto")

// generating the key pair
// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
});


function encrypt(text) {
    encrypted_text = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256'
        },
        // We convert the data string to a buffer
        Buffer.from(text)
    );
    return encrypted_text;
}

function decrypt(encryptedText) {
    decrypted_text = crypto.privateDecrypt({
            key: privateKey,
            // In order to decrypt the data, we need to specify the
            // same hashing function and padding scheme that we used to
            // encrypt the data in the previous step
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256'
        },
        encryptedText
    );
    return decrypted_text;
}

//Actual content
var text = "Hello World !!!";

var encryptedText = encrypt(text);
// encryptedText will be returned as Buffer
// in order to see it in more readble form, convert it to base64
console.log('encrypted text: ', encryptedText.toString('base64'));

const decryptedText = decrypt(encryptedText)
console.log('decrypted text:', decryptedText.toString());