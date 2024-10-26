for (var i = 0; i < 5; i++) {
    console.log(i);
}
let fruit;
fruit = ['a', 'b', 'c'];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
for (let fruit_ of fruit) {
    console.log(fruit_); //In thang ra gia tri cua mang
}
for (let fruit_ in fruit) {
    console.log(fruit_); // In ra index
}
//SET
let studentEntries = new Set();
//add values
studentEntries.add("nv a");
studentEntries.add("nv b");
studentEntries.add("nv c");
for (let student of studentEntries) {
    console.log(student);
}
//# sourceMappingURL=06_LoopStatement.js.map