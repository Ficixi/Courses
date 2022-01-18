function testStr() {
   a = "Hello";
   b = "World!";   
   console.log(a.toUpperCase() + b.toLowerCase());
};
testStr();

let myString = "This is just string!";
console.log(myString.slice(8, -1)); // вывод строки переменной "myString" начиная с 8-го символа и заканчивая -1 с конца

myString = new String("Hello hello");
console.log(myString.valueOf()); 

function myStr() {
   let a = "This is a test string";
   let b = "test";
   console.log(a.indexOf(b));  //выводит номер символа в строке переменной "а" который схож со значением переменной "b"
}
myStr();

function mySquare(x) {
   return (x*x);
}
mySquare(4);