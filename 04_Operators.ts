let a: number=15;
let b: number=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(a--);
console.log(--b);
console.log(++b);

//Comparision: ==,===,!=,>,>=,<,<=
//Logic AND,OR,NOT
//Condition: 
//Toan tu 3 ngoi
let num = 16;
let result = (num > 0) ? "True" : "False";
console.log(result);

//Type: in,typeof,instanceof
let Bike = {make: 'Honda', model: 'CLIQ', year: 2018};
console.log('make' in Bike);//Ktra xem make co nam trong Bike khong
// Output:
// true

let message = "Welcome to " + "Typescript";
console.log(typeof message);//Kien tra kieu du lieu
// Output:
// String

let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true

console.log( arr instanceof String ); // false

//Assignment: =,+=,-=,*=,/=,%=