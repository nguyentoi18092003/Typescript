//TypeScript Types: gồm built-in Type, User-Defined Type
// Built-in Type: Number, Void, String, Null, Boolean
// User-Defined Type
//Number: Khai bao so
let first = 150;
let second = 33.99;
console.log(first);
console.log(second);
//String 
let firstName = 'Auto';
let lastName = "Testing"; // doi voi string thi dau nhay don hay keps deu duoc
let lanuage = `Po`;
console.log('Get firstName: ' + firstName);
console.log(lastName);
console.log(`Get langague: ${lanuage}`); // cai hay cua dau ``
//Boolean
let aliveStatus = true;
console.log(aliveStatus);
//Void (undified hoac null)
let version = null;
let version1;
function showAliveStatus() {
    console.log("Day la ham tra ve kieu void");
}
showAliveStatus();
//Any: đại diện cho tất cả các kiểu dữ liệu thuộc kiểu built-in
let phoneNumber = '932742984';
phoneNumber = true;
phoneNumber = 2342423423;
phoneNumber = null;
//Undefined/Null
//==================================Defined Type
//ARRAY
var list = [1, 3, 5];
console.log(list);
var names = ['a', 'b', 'c'];
console.log(names);
//loop
for (var i = 0; i < names.length; i++) {
    console.log('Get :' + names[i]);
}
//Lay ra index dung in
for (var number in names) {
    console.log('Get index: ' + number);
}
// Lay ra gia trị
for (var number of names) {
    console.log('Get value: ' + number);
}
var list = [1, 3, 5];
console.log(list);
//TUPLE
//Tuple khác ở chỗ có thể chứa nhiều loại dataType
//Vi dụ 1:
let phone;
phone = ['a', 234];
//hoăc 
let phone1 = ['a', 234];
// Ví dụ 2:
var user;
user = [1, 'a', true, 1, 'h'];
for (var value of user) {
    console.log(value);
}
;
//ENUM: set hằng số
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
// Access String Enum
PrintMedia.Newspaper;
// NEWSPAPER
PrintMedia["Magazine"];
// MAGAZINE
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper1"] = 1] = "Newspaper1";
    PrintMedia[PrintMedia["Newsletter1"] = 2] = "Newsletter1";
    PrintMedia[PrintMedia["Magazine1"] = 3] = "Magazine1";
    PrintMedia[PrintMedia["Book1"] = 4] = "Book1";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
let mediaType = getMedia('Forbes');
let Calculator = {
    subtract(first, second) {
        return first - second;
    }
};
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode) {
        return 20000;
    }
}
//Class
class Student {
    constructor(_rollNo, _name) {
        this.rollNo = _rollNo;
        this.name = _name;
    }
    showDetails() {
        console.log(this.rollNo + ":" + this.name);
    }
}
// Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee1 extends Person {
    constructor(empcode, name) {
        super(name);
        this.empCode = empcode;
    }
    displayName() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}
let bill = new Employee1(100, "Bill");
bill.displayName(); // Name = Bill, Employee Code = 100
let dam = new Employee1(200, "Dam Dao");
dam.displayName(); // Name = Dam Dao, Employee Code = 200
//Fuction
//# sourceMappingURL=03_DataType.js.map