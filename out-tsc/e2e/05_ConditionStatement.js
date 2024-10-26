// if - else - if
var browserName = "firefox";
if (browserName === "firefox") {
    console.log("Start Firefox browser");
}
else if (browserName === "chrome") {
    console.log("Start Chrome browser");
}
else if (browserName === "firefoxheadless") {
    console.log("Start Firefox Headless browser");
}
else if (browserName === "chromeheadless") {
    console.log("Start Chrome Headless browser");
}
else {
    console.log("Please input your browser!");
}
// conditional operator
var x = 10, y = 20;
x > y ? console.log('x is greater than y.') : console.log('x is less than y.');
var day = 4;
switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
//# sourceMappingURL=05_ConditionStatement.js.map