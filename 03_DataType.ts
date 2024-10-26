//TypeScript Types: gồm built-in Type, User-Defined Type
// Built-in Type: Number, Void, String, Null, Boolean
// User-Defined Type

//Number: Khai bao so
let first: number=150;
let second: number=33.99;
console.log(first);
console.log(second);

//String 
let firstName: string ='Auto';
let lastName: string ="Testing"// doi voi string thi dau nhay don hay keps deu duoc
let lanuage =`Po`;
console.log('Get firstName: '+firstName);
console.log(lastName);
console.log(`Get langague: ${lanuage}`);// cai hay cua dau ``

//Boolean
let aliveStatus: boolean=true;
console.log(aliveStatus);

//Void (undified hoac null)
let version: void = null;
let version1: undefined;
function showAliveStatus(): void{
    console.log("Day la ham tra ve kieu void");
}
showAliveStatus();

//Any: đại diện cho tất cả các kiểu dữ liệu thuộc kiểu built-in
let phoneNumber: any ='932742984';
phoneNumber=true;
phoneNumber=2342423423;
phoneNumber=null;

//Undefined/Null

//==================================Defined Type
//ARRAY
var list: number[]=[1,3,5];
console.log(list);
var names: string[]=['a','b','c'];
console.log(names);
//loop
for(var i=0;i<names.length;i++){
    console.log('Get :'+ names[i]);
}
//Lay ra index dung in
for(var number in names){
    console.log('Get index: '+ number);
}
// Lay ra gia trị
for(var number of names){
    console.log('Get value: '+ number);
}

var list: Array<number>=[1,3,5];
console.log(list);

//TUPLE
//Tuple khác ở chỗ có thể chứa nhiều loại dataType
//Vi dụ 1:
let phone: [string,number];
phone=['a',234];
//hoăc 
let phone1: [string,number]=['a',234];

// Ví dụ 2:
var user: [number,string, boolean, number,string];
user=[1,'a',true,1,'h'];
for(var value of user){
    console.log(value);
};

//ENUM: set hằng số
enum Color {
    Red, Green, Blue
};

enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

// Access String Enum
PrintMedia.Newspaper;
// NEWSPAPER
PrintMedia["Magazine"];
// MAGAZINE

enum PrintMedia {
    Newspaper1 = 1,
    Newsletter1,
    Magazine1,
    Book1
}

function getMedia(mediaName: string): PrintMedia {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}

let mediaType: PrintMedia = getMedia('Forbes');

//Interface
interface Calc {
    subtract(first: number, second: number): any;//Hafn
}

let Calculator: Calc = {//ke thua
    subtract(first: number, second: number) {//Override lai
        return first - second;
    }
}

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        return 20000;
    }

}
//Class
class Student {
    rollNo: number;
    name: string;

    constructor(_rollNo: number, _name: string) {
        this.rollNo = _rollNo;
        this.name = _name;
    }

    showDetails() {
        console.log(this.rollNo + ":" + this.name);
    }
}

// Inheritance
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person {
    empCode: number;

    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }

    displayName(): void {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}

let bill = new Employee1(100, "Bill");
bill.displayName(); // Name = Bill, Employee Code = 100

let dam = new Employee1(200, "Dam Dao");
dam.displayName(); // Name = Dam Dao, Employee Code = 200
 
//Fuction