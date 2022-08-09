const crypto = require("crypto"); // required module 

const letsHash = function(algo, to_be_hashed) {
    const hash = crypto.createHash(algo);
    data = hash.update(to_be_hashed, "utf-8");
    gen_hash = data.digest("hex");
    console.log(algo + " : " + to_be_hashed + " ==> " + gen_hash);
}


letsHash("md5", "Hello World !!!");
letsHash("whirlpool", "Who are you ?");
letsHash("sha1", "I am Iron Man");
letsHash("sha224", "Okay, and then !?");
letsHash("ripemd160", "Shut up you all, I am Thooor !")