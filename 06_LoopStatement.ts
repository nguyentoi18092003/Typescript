for(var i=0;i<5;i++){
    console.log(i);
}
 let fruit: Array<string>;
 fruit=['a','b','c'];
 for(var i=0;i<fruit.length;i++){
    console.log(fruit[i]);
 }

 for(let fruit_ of fruit){
    console.log(fruit_);//In thang ra gia tri cua mang
 }
 for(let fruit_ in fruit){
    console.log(fruit_);// In ra index
 }

 //SET
 let studentEntries = new Set();//Trong file tsconfig.e2e.json cai "target": "es6" phai de la es6 ms bien dich sang file js duoc, con de 5 se khong bien dich duoc
 //add values
 studentEntries.add("nv a");
 studentEntries.add("nv b");
 studentEntries.add("nv c");

 for(let student of studentEntries){
    console.log(student);//Of lay ra gia tri
 }
 
studentEntries.forEach(function(value){//dung for each de duyet qua cac phan tu cua mang
    console.log(value);
})


 //MAP
 let ageMapping =new Map();
 ageMapping.set("nv 1",32);
 ageMapping.set("nv2",20);
 ageMapping.set("nv3",32);

 for(let key of ageMapping.keys()){// in ra cac key
    console.log("Ten ="+key);
 }

 for(let key of ageMapping.values()){
    console.log("Tuoi= "+value);
 }

//While/do-while