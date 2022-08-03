var value = "helL2o@";
var evalidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var pvalidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var eresult = value.match(evalidator);
var presult = value.match(pvalidator);

eresult ? console.log("Valid email") : console.log("Invalid email !!!!");
presult ? console.log("Valid password") : console.log("Invalid password !");