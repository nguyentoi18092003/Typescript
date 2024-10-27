//Ngyen tac YAGNI:không cần lam những thứ chưa thực sự cần thiết 
//Nguyên tắc KISS: tối giản nhất có thể, không thể tối ưu được thêm
//Naming Fuction
let countryName='VN';
function showCountryName(): void{
    console.log(countryName);
}
function tong(so1: number,so2: number){
    return so1+so2;
}
showCountryName();

// Anonymous function(khong co ten ham)

let cityName=function(){
    return "cach mang thang 8";
}

console.log(cityName());

//Arrow(Lambda) function

let phoneNumber1=()=>{
    return "93024209";
}
console.log(phoneNumber1());

//Optional Parameter
function showCityInfo(cityName: string, cityZipCode?: number){//Dau hoi cham o day dai dien rang co the co hoac khong
    console.log(cityName);
    console.log(cityZipCode);
}
showCityInfo("da nang",23423);
showCityInfo("saffdsa");

//default paramester
function showCityInfo1(cityName: string, cityZipCode?: number, country: string='VN'){//Dau hoi cham o day dai dien rang co the co hoac khong
    console.log(cityName);
    console.log(cityZipCode);
}
showCityInfo1("da nang",23423);
showCityInfo1("saffdsa");
showCityInfo1("saffdsa",2324,"BacNinh");
//Cai tham so cuoi cung ys, neu minh truyen vao no se lay gia tri ma minh truyen vao, neu khong truyen voa no se lay gia tri mac dinh ma minh gan macdinh ngay tu dau


//REST PARAMESTER
function sum1(a,...num: number []){
    for(const interator of num){
        a+=interator;
    }
    return a;
}
console.log(2,3,4);
console.log(2,4,5,6,7,8,8);//Chu y kieu phai cung kieu