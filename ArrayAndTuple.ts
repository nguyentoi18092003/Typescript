let mang1: string[]=['a','b','c'];
let mang2: number[]=[1,2,3];
let mang3: boolean[]=[true,false,true,false];

let mang4: Array<string> =['pig','dog','cat'];
let mang5: Array<string>;
mang5=['a','b','v'];

let mang6: (string |number|boolean)[]=['cat',2,'birth',true];
let mang7: Array<string|number> =['apple',2,'orange',3,4,'s'];

//For interator
for(let i=0;i<mang1.length;i++){
    console.log(mang1[i]);
}
//for in: index
for(const value in mang1){
    console.log(value);
}
//for of: value
for(const value of mang1){
    console.log(value);
}

//Array methods: 
//concat(): de noi mang,
//fill(): dien day phan tu cho mang,
//indexOf(): kiem tra xem gia tri co nam trong mang hay khong, 
//join (): join tat ca cac phan cua cai mang
//pop(): de remove phan tu cuoi cung
//push(): de them moi
//reverse(): dao
//sort();
//shift(): remove va return first element
//slice(): tach mang
//toString(): in ra gia tri cua mang
//forEach()

//TUPLE
//- co the chua nhieu loai kieu loai du lieu tren 1 mang
// Truy cap theo index
//pop,push
//modify: update lai gia tri
//concat: nối
//Dung như 1 function
//VD:
let arrtuple=[101,'s','sfdfs',false,'3'];
function showTuple(arr: any[]){
    for(const val of arr){
        console.log(val);
    }
}
showTuple(arrtuple);
