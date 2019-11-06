function sayHi (  name  ){
    var age = 10;
}

const age = 10;

var things = [ "asd" , "asdads" ];

sayHi('alex');

const items = new Array();

console.log(items);

[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
});

const first = 1;
const second = 1;

if (first == second) {
    console.log('equal');
}

let a = 1;
let b = 2;
let c = 3;
let d = 4;

const foo = a && b < 0 || c > 0 || d + 1 === 0;

console.log('foo', foo);

function addCount(one, two) {
    return one + two;
}

function badCount(one, two){
  return one + two - 1;
}

addCount(1, 2);
badCount(1, 2);

if(a) {
    addCount(1, 2);
}

if (b && c) {
    addCount(1, 2);
}

const x=a+5;
const y = a + 5;

console.log(x, y);