 const form = document.querySelector(".js-form");
 const input = document.querySelector("input");
 const greeting = document.querySelector(".js-greetings");
 const userLocalStorage = "currentUser"; //로컬 스토리지 내 아이템의 명칭(currentUser)을 변수에 저장
 const showingClassName = "showing";

//5. 이름값을 로컬스토리지에 저장하는 일을 담당할 함수를 생성한다.
 function saveName(name){
    localStorage.setItem(userLocalStorage,name);
 }
//4. submit 이 들어왔을 때 처리할 사항들 정의
 function handleSubmit(event){
   event.preventDefault(); //1. form내 submit처리된것(엔터 키)을 외부로 넘기지 않는다.  
   const currentValue = input.value; //2. 사용자 입력 이름값을 변수에 담는다.
   paintGreeting(currentValue); //3. 이름 변수를 html에 그려준다.
   //여기까지 하면, greeting.innerText = `Hello ${text}`; 는 잘되지만, html을 새로고침하면 도루묵이됨.
   saveName(currentValue); //4. 이름값을 로컬스토리지에 저장하는 일을 담당할 함수를 호출한다.
 }
//3. 내 브라우저의 로컬스토리지에 저장된 사용자 이름이 없으면, 이름을 입력하라는 input박스를 html에 그려줄 함수
 function askForName(){
    form.classList.add(showingClassName); //1. 이름 입력 요소를 보여준다(html에서 이름 입력 요소를 display none으로 기본 설정한 것을 display block으로 설정된 class를 추가하여, 기본 설정을 변경한다.) 
    form.addEventListener("submit",handleSubmit);//2. 유저가 입력하고 엔터를 치면 form 요소의 기본 룰에 따라, 그 입력값을 어디론가 보내려고 하고 새로고침해버리므로, 이를 막아야함.
 } 

 //2. 내 브라우저의 로컬스토리지에 저장된 사용자 이름이 있으면, 그 이름을 html에 그려줄 함수 
 function paintGreeting(text) { 
    form.classList.remove(showingClassName); //1. 이름 입력 요소를 지운다(?? 처음부터 display:none 인데 왜 remove?)
    greeting.classList.add(showingClassName); //2. 인사말 출력 요소를 보여준다.
    greeting.innerText = `Hello ${text}`;//3. 인사말을 요소에 넣어 보여준다.
 }
 
 //1.내 브라우저의 로컬스토리지에서 불러와 보여줄 사용자 이름이 기존에 저장되어 있는지 없는지를 확인 후 있으면 해야할 일, 없으면 실행할 일을 정의하는 함수를 생성한다.
 function loadName() { 
     const currentUser = localStorage.getItem(userLocalStorage); //내 브라우저의 로컬스토리지에 저장된 사용자 이름(currentUser)을 가져오는 내장 함수(localStorage.getItem()) 활용
     if(currentUser === null) { //불러올 값이 없으면
         askForName();
     } else { //불러올 값이 뭔가 있으면
        paintGreeting(currentUser);
     }
 }
//0. 내 브라우저의 로컬스토리지에 불러와 보여줄 사용자 이름이 기존에 저장되어 있는지 없는지를 확인하고, 각각의 경우에 따라 실행할 함수 loadName()를 호출한다.
 function init() {
    loadName()
 }

 init();