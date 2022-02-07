//Задача #1
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
}
/*
1. для функции setTimeout требуется как минимум 2 параметра:функция которая будет выполняться и время(в мс), 
через которое эта функция выполнится. В задании было не указано время, поэтому задача не выполнялась
2. После подстановки в setTimeout(function(){}, 1000), на консоль через 1с выводится практически одновременно 10 раз число 10. 
Причины: 
    * функция, описанная в setTimeout выполняется через время, указанное в setTimeout, после того, как к setTimeout обратились.
    Цикл for() выполняется очень быстро, и при этом получается, что к setTimeout обращаются 10 раз почти одновременно 
    (разница в 1мс практически незаметна. Это время выполнения одного шага цикла). Но, чтобы понять, что к setTimeout обращаются 
    10 раз, можно вместо 1000 подставить значение i*1000. После этого на консоль так же выведется 10 раз число 10, но вывод каждого 
    следующего числа будет с задержкой. (в первый раз при вызове setTimeout, будет передана задержка 0*1000=0, во второй 
    раз 1*1000=1000 и т.д)
    * однако, как мы видим из функции внутри setTimeout, на консоли должны появлять значения i (0, 1, 2,...9), но этого не происходит.
    Дело в том, что переменная i обьявлена как var. В тот момент, когда функция выполняется, цикл уже завершил свою работу и переменная i
    стала иметь значение 10, которое и выводится. 
    Если  бы переменая была обьявлена как let, то для каждой итерации создавалась бы своя переменная шага i. И все значения i (0, 1, 2...9)
    хранились бы в стеке. Тогда setTimeout обращался бы каждый раз к своему отдельному значению i. 
    Переменная var создается один раз, а потом для каждой итерации пересоздается, то есть ее значения не хранятся в виде массива, 
    как с let, а перезаписываются.
*/


//Задача #2
//1)
const date= new Date();
const daysOfWeek = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3:"Среда",
    4:"Четверг",
    5:"Пятница",
    6:"Суббота"
}
console.log("Сегодня "+daysOfWeek[date.getDay()] +", "+date.toLocaleDateString())
console.log("Текущее время: " + date.toLocaleTimeString())

//2)
let myX=24589
function reverse(x){
    let res2=x.toString().split('').reverse().join('')
    x=Number(res2)
    return x
}
console.log(reverse(myX))

//3)
let n=5
let res3=1
for(let i=1; i<=n; i++){
    res3=res3*i
}
console.log("Факториал: " + res3)

//4)
let a4 = 5
let b4 = 7
console.log("Наибольшее число: " + (a4>=b4?a4:b4))

//5)
myColor = ["Red", "Green", "White", "Black"];
let res5 = myColor.join(',')
console.log(res5)
res5=myColor.join('+')
console.log(res5)

//6)
function monthName(date){
    let month ={
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
    return month[date.getMonth()]
}
console.log(monthName(new Date("12/11/2009")))

//7)
const str7 = "Shftkldzjfs"
if(str7[0]>='A' && str7[0]<='Z')
{
    console.log("Заглавная")
}else console.log("Маленькая")

//8)
var smile = document.getElementById("mySmile");
var context = smile.getContext('2d');

    context.strokeStyle = "#f0f32a";
    context.fillStyle = "#f0f32a";
    context.beginPath();
    context.arc(50,50,50,0,Math.PI*2);//(x центра, y центра, radius, startAngle, endAngle [, anticlockwise]);
    context.closePath();
    context.stroke();
    context.fill();

    context.fillStyle = "black";
    context.beginPath();
    context.arc(30,40,5,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(70,40,5,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();

    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.beginPath();
    context.arc(50,50,30,Math.PI/4,Math.PI*3/4);
    context.closePath();
    context.stroke();
    context.fill();


    
//Задача №4

//Задание 1
let patter =[]
patter[0]= document.getElementById("string-3").innerHTML;
patter[1]= document.getElementById("string-5").innerHTML;
patter[2]= document.getElementById("string-2").innerHTML;
patter[3]= document.getElementById("string-6").innerHTML;
patter[4]= document.getElementById("string-4").innerHTML;
patter[5]= document.getElementById("string-1").innerHTML;

for(let i=0; i<6; i++){
   console.log(patter[i]) 
}


//Задание 2
let myElements = document.getElementsByClassName('element');
myElements[0].style.backgroundColor = '#FF0000';
myElements[1].style.backgroundColor = '#B22222';
myElements[2].style.backgroundColor = '#DC143C';
myElements[4].style.backgroundColor = '#00FF00 ';
myElements[5].style.backgroundColor = '#7CFC00';
myElements[3].style.backgroundColor = '#ADFF2F';


//Задание 3 
let myOl = document.getElementById("todo-list");
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for(let i=0; i<tasks.length; i++){
    let myLi = document.createElement("li");
    myLi.appendChild(document.createTextNode(tasks[i]));
    myLi.setAttribute("class", "task");
    myOl.appendChild(myLi);
}


//Задание 4
let paragraph = document.body.getElementsByTagName('p');
for(let i=0; i<3; i++){
    paragraph[i].after(document.createElement('hr'));
}


//Задание 5
let item = document.getElementsByClassName('item');
item[1].remove();

let replaceItem = document.createElement("div");
replaceItem.appendChild(document.createTextNode("Canned Fish "));
replaceItem.setAttribute("class", "item");

let replaceQty = document.createElement("span");
replaceQty.appendChild(document.createTextNode("x 4"));
replaceQty.setAttribute("class", "qty");

let cart = document.getElementById("cart-items");
replaceItem.appendChild(replaceQty)
cart.appendChild(replaceItem);
cart.replaceChild(item[4], item[3])



//Задание 6
let myPrompt =''
let task6 =document.getElementById("myToDoList");
do{
    myPrompt = prompt('Введите новую задачу для добавления в список. Для выхода Enter или Отмена');
    console.log(myPrompt)
    if(myPrompt!='' && myPrompt!=null){
        let listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(myPrompt));
        task6.appendChild(listItem)
    }
}while(myPrompt!='' && myPrompt!=null)




