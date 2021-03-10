// Write your solution here!
var cats = [];
cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    var cats1 = cats.concat(name);
    return cats1;
}

function prependCat(name) {
    var cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat() {
    var cats3 = cats.slice(0, cats.length - 1);
    return cats3;
}

function removeFirstCat() {
    var cats4 = cats.slice(1);
    return cats4;
}