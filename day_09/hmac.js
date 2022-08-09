const crypto = require("crypto"); // required module 

const letsHash = function(algo, to_be_hashed, secret_key) {
    const hmac = crypto.createHmac(algo, secret_key);
    data = hmac.update(to_be_hashed, "utf-8");
    gen_hash = data.digest("hex");
    console.log(algo + " : " + to_be_hashed + " ==> " + gen_hash);
}


letsHash("md5", "Hello World !!!", "MySecretKey");
letsHash("whirlpool", "Who are you ?", "[]489_&$)");
letsHash("whirlpool", "Who are you ?", "[]487_&$)");
letsHash("sha256", "The sun is shinning", "[]489_&$)");
letsHash("sha512", "So what ?", "[]489_&$)");