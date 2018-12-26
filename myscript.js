
/*
     콘솔 로그 사용 및 변수
*/

console.log('오랜만이군, 재연');
const a = 100;
let b = a-10;
console.log (b,a);

//const: to NOT allow changes the value of valuable
//var, let: allow changes the value of valuable
// Use only const to create a value!!!!! 

//데이터 타입에 따른 변수
const what = "Jayon"; // strings
console.log(what);

const wat = true; // boolean
console.log(wat);

const w = 55.1; //floats
console.log(w);


/*
     Array (배열) =====================================
*/


//어레이 형식의 변수
//(만약 어레이가 없다면)
const Mon = "Monday"; 
const Tue = "Tueday"; 
const Wed = "Wedday"; 
const Thu = "Thuday"; 
console.log(Mon,Tue,Wed,Thu);

//어레이를 사용할 수 있다면, 이렇게 간단하게 하나의 변수에 처리 가능하죠.
const daysOfWeek = ["Mon","Tue","Wed","Thu",true, 100, 0,"aaa"];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);

/*
     Object (객체)=====================================
*/          

//오브젝트를 사용하여 이름붙이기 (어레이처럼 여러 데이터를 담는데 쓰이는 목적은 같으나,
// 값의 종류의 순서 및 번호를 기억할 필요없음)
const myInfo = {
    name: "Jayon",
    age: 38,
    gender: "female",
    isCool: true,
    favMovie: ["a movie","b movie","c movie"],
    favFood: [
    {name:"meat",type:"pork",country:"Korean"},
    {name:"vegie",type:"roots",country:"Aus"}
    ]
};
console.log(myInfo.age);
myInfo.age = 39;
console.log(myInfo.age);
console.log(myInfo.favFood[0].type); // print "Pork"
console.log(myInfo.favMovie[0]);// print a movie
console.log(myInfo.favFood[1].country);// print aus
console.log(myInfo);
console.log(console);

/*
    Function(함수) =====================================
*/ 


//function: 여러번 실행해야 하는걸 하나로 만들어서 쓰기 위한 목적임.
//argument(인자)를 이용할 수 있고, 무한대의 인자를 쓸수있다. 

//콤마를 이용한일반적인 스트링 보여주는 방식 
function sayHello(customerName,customerGender) {
    console.log('Hello,',customerName,'I know you are a',customerGender); 
};
sayHello("Jayon","Female");

// 기존 스트링 보여주는 방식:
function sayHi(customerName,customerGender){
    console.log('Hello, '+customerName+' I know you are a '+customerGender)
}
sayHi("Suji","Femle");

// 요즘의 가장 새로운 깔끔한 방식:
function sayGreeting(customerName,customerGender){
    console.log('Hello ${customerName} I know you are a ${customerGender}')
}
sayGreeting("Jason","Male");


//나만의 오브젝트를 이용한 빌트인 함수 만들어보기. console.log() 함수처럼

const calculatorJayon = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    }, 
    divide: function(a,b){
        return a/b;
    }
}
// calculatorJayon이라는 객체내의 plus라는 이름의 함수를 호출하여 인자값을 넣어 처리하고, 리턴값이 나오면 로그에 출력
const resultPlus = calculatorJayon.plus(100,50);
console.log(resultPlus);
// calculatorJayon이라는 객체내의 minus 라는 이름의 함수를 호출하여 인자값을 넣어 처리하고, 리턴값이 나오면 로그에 출력
const resultMinus = calculatorJayon.minus(100,50);
console.log(resultMinus);

/*
     DOM (Document Object Model)=====================================
        :자바스크립트는 html 문서 내 모~~든 요소를 가져다가 객체로 만들어서 가지고 있음.
        :Jayon's mistake, 실행할 자바스크립트가 html의 해당 객체보다 먼저 인식되면, 제대로 실행되지 않음. 
*/ 
        
//예시1.  html문서내에 title 이라는 ID를 가진 요소를 newTitle 라는 변수에 담고, 이를 로그에 출력 및 해당 요소를 
//html 내 값을 변경
const newTitle = document.getElementById("title");
console.log(newTitle);
newTitle.innerHTML = "Changed!"

//하나의 html요소에 (객체에) 가능한 모든 하위 요소를 볼 수 있는 명령어: console.dir
const newTitle2 = document.getElementById("title2");
newTitle2.innerHTML = "Changed2!"
newTitle2.style.color = "red"; //<- 이것도 dir목록에서 나옴. 설정안하면 비어있고, 설정하면 해당 값(red)가 들어있음
console.dir(newTitle2);
document.title = "I own you!" //<- html의 타이틀을 바로 변경도 가능해.

//querySelector사용하기: 뭐든지 찾아줌. 아이디든 클래스네임이든 뒤에 적으면됨. 많~~이 사용할 것임!!
const newTitle3 = document.querySelector("#title3");
newTitle3.innerHTML = "Changed3!"
newTitle3.style.color = "red"; 
console.dir(newTitle3);

//이벤트 처리 예시1: 윈도우 객체의 사이즈가 변경되면, 콜솔에 로그를 남겨라
function handleResize() {
    console.log("I have been resized");
}
window.addEventListener("resize",handleResize);
//window.addEventListener("resize",handleResize()) <- 라고 함수를 호출하면, 이벤트가 발생하지 않아도, 바로 함수가 호출됨. 매우 주의할것!!

//이벤트 처리 예시2: html문서의 newTitle4라는 아이디를 가진 객체를 클릭하면, 그 객체의 색을 변경하라
const newTitle4 = document.querySelector("#title4");
function handleClick() {
    newTitle4.style.color="yellow";
}
newTitle4.addEventListener("click",handleClick);

/*
    If - else  ==========================================
*/ 

// 간단 예제 1:
if (10>5) {
    console.log('10 is bigger than 5');
} else {
    console.log('10 is not bigger than 5')
}

// 간단 예제 2:
const age = prompt("how old are you?");
if (age>=19 && age<100) {
    console.log("yes you can but we dont recommend"); 
} else if (age >= 100 ) {
    console.log("yes you can if you want");
    
}else { 
    console.log ("no you are too young");

}

// 예제3. 텍스트를 클릭하면 원래 블랙인 걸 블루로 바뀌고 다시 클릭하면 원래 블랙으로 바뀌게, 함수와 if-else로 짜보라

const title5 = document.querySelector("#title5");
const baseColor = "yellow";
const changedColor = "blue";
// title5.style.color = basecolor; <- 실수!!! 단독으로 먼저 안먹는이유: 이벤트 처리로 해주거나 함수 내 실행문으로 넣어야 실행됨!!

function changeColor() {
    const currentColor = title5.style.color; // 실수!!! currentColor 변수는 색의 코드값을 담고 있을 뿐. 객체를 담고 있는게 아님.
    if (title5.style.color===baseColor) { //  그래서 title.style.colr 말고 currentColor를 쓰면 안먹음!!
        title5.style.color = changedColor;
    } else {
        title5.style.color = baseColor;
    }
}

function init() {
    title5.style.color = baseColor;
    title5.addEventListener("click",changeColor);
}
 
init();

//예제4. 위 예제3을 JS에서 컬러나 css관련 내용을 모두 없애라. JS는 JS만 다루게. 클래스를 이용하여!

const title6 = document.querySelector("#title6");
const clickedClass = "clicked";
function changeColor() {

    const currentClass = title6.className; //아이디가 title6인 객체의 클래스에 접근
    if (currentClass!==clickedClass) { 
        title6.className = clickedClass;
    } else {
        title6.className = "";
    }
}

function init() {
    title6.addEventListener("click",changeColor);
}

init();



