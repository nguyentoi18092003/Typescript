//EVERY (giong nhu phep AND)
var listNumber: Array<number>=[19,20,25,45,65,90,3,4,5];
function checkAge(value){
    return value>=18 && value<=60;
}
//Ham very nay no se kiem tra tat ca cac phan tu trong mang, neu tat ca phan tu trong mang tho a man ham do thi ms mowi tra ve true(vi no kiem tra AND)
var yearAll= listNumber.every(checkAge,listNumber);
console.log(yearAll);
//OUTPUT: false


//SOME (giong nhu phep OR)
var yearAll= listNumber.some(checkAge,listNumber);// CHi can co 1 gia tri trong mang thao man ham kia, thi no se tra ve true
console.log(yearAll);
//OUTPUT: true

//FILTER
console.log(listNumber.filter(checkAge));// No se loc ra cac phan tu thoa man ham checkAge
//Output: [ 19, 20, 25, 45 ]

//MAP
var employeeSalary=[1000,1200,800,1500];
function applyBonus(sal){
    return sal*2;
}
console.log(employeeSalary.map(applyBonus));//No se ap dung tat ca phan tu cho mang kia,(no se tinh toan theo cai ham mk add vao) va tra ve magn moi
//OUTPUT [ 200, 400, 600, 800 ]

//Vi du bai toan thuc te
//Salary: <=800$-10%
//Salary: >=200$-12%
//Salary: >=300-15%

//REDUCE: tinh tong
let salarySum=0;
salarySum=employeeSalary.reduce((sum,sal)=>{
    return sum+=sal;
},0);// Ơ day sum duoc gan bang 0 tu dau
console.log(salarySum);


