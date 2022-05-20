/* Заменить данное натуральное число на число, которое получается из исходного записью его цифр
в  обратном порядке (например, дано число 156, нужно получить 651). */
var a = prompt("Введите любое число:");
var h = null;
var c = null;
var b = null;
var t = 1;
var sum = 1;
var arr = [];
var k = null;
c = a % 10;
b = Math.floor(a/10)
if (a>=100){
var i = 1;
arr[1]=c;
do {
    c = b % 10;
    b = Math.floor(b/10);
    i=i+1;
    arr[i]=c;
    sum = sum + 1;
}
while (b>=10);
arr[sum+1]=b;
for (var j = 2; j<arr.length;j++){
  t=t*10;
}
for (var i = 1; i<arr.length;i++){
  k=arr[i]*t;
  t = t / 10;
  h=h+k;
}
console.log(h);
}
else if (a>=10 && a<100) {
h=c*10+b;
console.log(h)
}
else {
console.log(a);
}