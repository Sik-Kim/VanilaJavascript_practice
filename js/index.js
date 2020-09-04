// alert("Im working Im beautiful language. It worth it!!");

// console.log("Im working Im beautiful language. It worth it!!");

/*
let a; // a 변수 생성
a = 221; // a 변수 초기화
let b = a - 15; // b 변수 생성
console.log(b);
// let은 변수 생성, const 상수 생성
일반적으로 const를 많이 쓴다.
*/

/* String
const name = "jeongsik kim";
 console.log(name);
*/

/* boolean
const c = true;
console.log(c);
*/

/* float
const d = 55.1;
console.log(d);
*/

/* array
const daysOfWeek = [
  "mon",
  "tue",
  "wed",
  "thur",
  "fri",
  "sat",
  "sun",
  true,
  false,
  4,
  5,
  45,
  123,
];
console.log(daysOfWeek);
console.log(daysOfWeek[3]); //배열 n번째 값 출력하기
*/

/*
// object
const sikInfo = {
  name: "jeong sik",
  age: 32,
  gender: "male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Iron man"],
  favFood: [
    {
      name: "kimchi",
      fatty: false,
    },
    {
      name: "Cheese burger",
      fatty: true,
    },
  ],
}; //Object 내 array

console.log(sikInfo);
console.log(sikInfo.favMovies[0]);
console.log(sikInfo.favFood[1]);
console.log(sikInfo.favFood[1].name);
//console이 Object, log가 key 다?
//이겨우에는 log가 함수 function
*/

// function
/*
function sayHello() {   //sayHello라는 함수 생성
  console.log("Hello!");  //함수가 포함한 내용으로 "Hello"를 출력하지
}

sayHello();
*/

/*
function sayHello(name, age) {
  //name,age가 argument임(함수안의 값?)
  console.log("Hello~ My name is", name, "I am", age, "years old.", age);
}
sayHello("Jeongsik", 32);

function sayHi(name, age) {
  console.log("Hi " + name + " How old are you? I am " + age + age);
}
sayHi("Jeongsik", 32);

function sayHello2(name, age) {
  return `Hello ${name}. I am ${age} years old.`;
}
const greetTomas = sayHello2("Tomas", 50);
console.log(greetTomas);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  remainder: function (a, b) {
    return a % b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const plus = calculator.plus(7, 4);
const minus = calculator.minus(7, 4);
const divide = calculator.divide(11, 5);
const rema = calculator.remainder(11, 5);
const mul = calculator.multiple(3, 6);
const pow = calculator.power(2, 10);
console.log(plus);
console.log(minus);
console.log(divide);
console.log(rema);
console.log(mul);
console.log(pow);
*/

/*
// DOM
const title = document.getElementById("title"); //모든 title이라는 Object에 적용된다.
title.innerHTML = "Hi! From JS. wow";
title.style.color = "red";
// console.dir(title);
console.dir(document); //document가 뭐하는앤지 모르겠음;; 위에꺼랑 머가 다른지.
document.title = "I own you now!";
//document가 html 문서 자체를 말하는건가?
title.style.backgroundColor = "yellow";

//암튼 javascript 파일에서 html을 조정할 수 있음. html, css에 효과 안쓰고 js 파일에서 할 수 있다는 얘기.

//그러나 js는 html, css 보강하기 위한게 다가 아님.

//사실 js는 이벤트에 반응하기 만들어졌음.
//이벤트란거는 웹사이트에서 발생하는 것. 가령 click, resize, submit input before clsing printing 등등 (사용자가 행함으로 발생하는 것?) 
아래부터 이벤트 내용
*/

/*
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);
// 클릭(이벤트) 발생하면 "title"이 파란색 되는 함수임.
//() 붙이고 안붙이고 중요. 붙이면 바로 실행(이벤트 발생 안했는데!) 그래서 안붙여야됨
*/

/*
// if문 활용
if (10 < 5) {
  console.log("hi");
} else if (10 === 11) {
  console.log("ho");
} else {
  console.log("ha!");
}
*/

/*
const age = prompt("How old are you?"); //prompt 요즘은 거의 안씀. 옛날 JS임
// console.log(age);
if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("you can drink");
} else {
  console.log("you are too young. you cannot drink");
}
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)"; //rgb는 색깔 범위
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
// handleClick 함수
// 1. currentColor라는 상수?는 title의 현재 색깔
// 2. 현재 BASE 색이면 OTHER로 바꾸고 OTHER면 BASE로 바꾸는 기능
// 즉 handleClick은 색깔을 번갈아가며 바꾸는 기능 제공
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick); //"click"도 있음
}
//init 함수
// 1. title.style.color 초기색은 BASE_COLOR로 설정
// 2. "mouseenter"가 발생시 handleClick 함수를 실행시켜라.
// 즉 init 함수는 초기값 설정 및 이벤트 설정하는 기능 제공
init();  //init 함수 실행
*/

/*
// classList 사용
//class 추가/삭제에 따라 css 속성 적용하기
const title = document.querySelector("#title");
// querySelector기능이 뭔지? #title은 뭔지

const CLICKED_CLASS = "clicked";
// CLICKED_CLASS 이름의 상수에 "clicked"이라는 클래스 넣음
function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    // title.className = CLICKED_CLASS;
    //\\ class 변화 : btn -> clicked
    title.classList.add(CLICKED_CLASS);
    //\\ class변화 : btn -> btn clicked
    //이렇게 하면 cursor가 여전히 있음. class에 btn은 계쏙 유지되니까. 검사-elements에서 확인가능.
  } else {
    // title.className = "";
    title.classList.remove(CLICKED_CLASS);
    //여기서 다시 돌아가진 않음. 왜냐면 else 조건이 안되거든. currentClass는 clicked가 아니라 btn clicked 이니까. (그래서 다시 돌아가는 것까지 하려면 if 조건을 바꿔야함. contains라는 객체를 사용해서! 복잡하니 그건 밑으로 다시 해야겠다.)
  }
}
// handleClick이란 함수 생성.
// currentClass 상수는 title class의 className임
// currentClass의 class name이 CLICKED_CLASE인 "clicked"로 clsss name이 됐다가 "" 없어졌다가 반복됨

function init() {
  title.addEventListener("click", handleClick);
}
init();
//init함수는 클릭하면 handleClick 함수 실행하는 기능

//js이용해서 그냥 클래스 이름만 바꾸는 거지
//color가 뭔지 css가 뭔지 등등 아무것도 신경쓰지 않도록!!

//classList?? 이건 method가 있어서 이걸사용해서 내가 쓰고 싶은 함수를 쓸수있따?
*/

/*
// contains 사용
// class name 변경 후 처음 class name으로 되돌아오는 거
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS); //title 클래스이름에 clicked가 있냐?
  if (!hasClass) {
    //hasClass가 아니냐?
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
//그러나 이것도 복잡한듯? 그래서 더 쉽게하려면? 사실 일반적으로 간단한 toggle을 사용. 위에까지는 원리를 이해하기 위한 과정.
*/

//toggle 사용 (개발자는 게을러서 간단한걸 좋아하지)
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
 title.classList.toggle(CLICKED_CLASS);
 //toggle은 안에 있는 값들을 체크함. class가 있으면 add, 없으면 remove

function init() {
  title.addEventListener("click", handleClick);
}
init();