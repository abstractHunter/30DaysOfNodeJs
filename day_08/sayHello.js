var greet = function(name) {
    console.log("Hellooooo " + name + " !!");
}

var greetEverybody = function(array) {
    array.forEach(element => {
        greet(element);
    });
}

var greetEverybodyExcept = function(array, except) {
    array.forEach(element => {
        if (element != except) {
            greet(element);
        }
    });
};

module.exports = {
    greet: greet,
    greetEverybody: greetEverybody,
    greetEverybodyExcept: greetEverybodyExcept
};