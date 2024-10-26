//TypeScript Types: gồm built-in Type, User-Defined Type
// Built-in Type: Number, Void, String, Null, Boolean
// User-Defined Type
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Number: Khai bao so
var first = 150;
var second = 33.99;
console.log(first);
console.log(second);
//String 
var firstName = 'Auto';
var lastName = "Testing"; // doi voi string thi dau nhay don hay keps deu duoc
var lanuage = "Po";
console.log('Get firstName: ' + firstName);
console.log(lastName);
console.log("Get langague: ".concat(lanuage)); // cai hay cua dau ``
//Boolean
var aliveStatus = true;
console.log(aliveStatus);
//Void (undified hoac null)
var version = null;
var version1;
function showAliveStatus() {
    console.log("Day la ham tra ve kieu void");
}
showAliveStatus();
//Any: đại diện cho tất cả các kiểu dữ liệu thuộc kiểu built-in
var phoneNumber = '932742984';
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
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var number = names_1[_i];
    console.log('Get value: ' + number);
}
var list = [1, 3, 5];
console.log(list);
//TUPLE
//Tuple khác ở chỗ có thể chứa nhiều loại dataType
//Vi dụ 1:
var phone;
phone = ['a', 234];
//hoăc 
var phone1 = ['a', 234];
// Ví dụ 2:
var user;
user = [1, 'a', true, 1, 'h'];
for (var _a = 0, user_1 = user; _a < user_1.length; _a++) {
    var value = user_1[_a];
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
var mediaType = getMedia('Forbes');
var Calculator = {
    subtract: function (first, second) {
        return first - second;
    }
};
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
//Class
var Student = /** @class */ (function () {
    function Student(_rollNo, _name) {
        this.rollNo = _rollNo;
        this.name = _name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.rollNo + ":" + this.name);
    };
    return Student;
}());
// Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empcode;
        return _this;
    }
    Employee1.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee1;
}(Person));
var bill = new Employee1(100, "Bill");
bill.displayName(); // Name = Bill, Employee Code = 100
var dam = new Employee1(200, "Dam Dao");
dam.displayName(); // Name = Dam Dao, Employee Code = 200
//Fuction
//# sourceMappingURL=03_DataType.js.map