//1
var obj = ["Понедельник ", "Вторник ", "Среда ", "Четверг ", "Пятница ", "<b>Суббота </b>", "<b>Воскресенье</b>"];
    for (var key in obj) {
        document.write(obj[key]);
    }
//2
let date = new Date();
let time = date.toLocaleTimeString();
document.write("<br>" + time);
//3
let arr= 0;
for (let i = 1; i <= 100; i++) {
  arr += i;
}
document.write("<br>" + arr);
//4
for (let i = 0; i <= 100; i += 2) {
    document.write(i + "<br>");
}
//5
var a = prompt("Введите число A: ")
var b = prompt("Введите число B: ")
if (a % b == 0) {
    document.write("<br>" + "Делиться: " + a / b);
  }else{
    document.write("<br>" + "Делиться с остатском: " + a % b);
}
  

