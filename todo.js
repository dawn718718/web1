const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

//const toDosArray = []; 
let toDosArray = []; //step 7에서 const 를 let으로 변경.

//step 7. 할일 리스트에서 삭제하기
function deleteToDo (event) {
   // console.log(event.target.parentNode);//deleteToDo를 호출한 아이(event)의 대상의 부모노드 정보를 콘솔에 찍어봄.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //여기까지는 화면에서만 삭제 기능.
    const cleanToDosArray = toDosArray.filter(function(toDo){ //별개 함수 만드는것을 피하려고, 함수 이름 정의 및 생성없이 바로 집어 넣음.
        return toDo.id !== parseInt(li.id);
    });
    toDosArray = cleanToDosArray;
    saveToDos();
}

//step4. 어레이에 담긴 할일 목록 (li들을) 들을 로컬스토리지에 스트링형태로 저장하는 함수 생성하기
function saveToDos(){
    //브라우저의 로컬스토리지는 자바스크립트의 data를 그대로 저장할 수 없다. 스트링으로만 저장함. true라고 해도 이를 boolean으로 인식못하고 그냥 글씨 true로 저장함.
    //JSON.stringify는 오브젝트의 모든 것을 스트링을로 변환
    localStorage.setItem(TODOS_LS,JSON.stringify(toDosArray));
}
//step3-2. submit날린 후 변수에 저장한 사용자 입력값을 화면에 그려주는 함수 생성하기
function paintToDo(text){
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArray.length +1; // 실시간 매 어레이의 총 길이에 1을 더해서 아이디로 만듦.
    delBtn.innerText = "x";
    delBtn.addEventListener("click",deleteToDo);//step7에서 생성
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; //li에도, 어떤 아이를 삭제했는지 알아야 하기 때문에, 오브젝트용으로 생성한 동일한 id를 부여함
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId// 실시간 매 어레이의 총 길이에 1을 더해서 아이디로 만듦.
        //id: toDosArray.length +1;
    };
    toDosArray.push(toDoObj);
    saveToDos();

}
//step3-1. submit을 날리면 할일을 함수로 정의한다.
function handleSubmit(event) {
    event.preventDefault(); //1. form의 기본 동작 처리 무시
    const currentValue = toDoInput.value; //2. 유저 입력값 변수에 저장
    paintToDo(currentValue); //3. 유저 입력값이 담긴 변수의 밸류를 html에 뿌려주는 함수 호출하기
    toDoInput.value = ""; //4.뿌려주고 나면 유저 인력란은 비워주기 

}
//step 6. 객체형 데이터타입으로 파싱된 어레이내 각각의 할일을 화면에 그려주는 함수 실행
function paintAfterLoad(toDo) {
paintToDo(toDo.text); 
}

//step2. 할일들을 로컬스토리지로부터 로드하는 함수를 정의한다. 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //1.로컬스토리지의 값을 변수에 담는다.
    if (loadedToDos!==null) {//2. 변수에 값이 존재한다면,
     
    //step5. 로컬스토리지에, 배열내에 객체형태로, 그것도 스트링타입으로, 각각 저장된 할일들을 화면에 그려주기
      const parsedToDosArray = JSON.parse(loadedToDos); //스트링으로 저장된 것을 자바스크립트가 객체로 인식할 수 있게 파싱해준다. 
      parsedToDosArray.forEach(paintAfterLoad);//parsedToDosArray 라는 어레이 안에 있는 각각의 데이터에 대해서, 적용할 함수를 각각 실행함.
        //parsedToDos.forEach(function(toDo){ <-- 함수 이름을 정하는 등 함수를 새로 정의하기 싫으면, 이렇게 forEach()내장함수 안에 직접 함수를 넣어줘도 무방함.
        //console.log(toDo.text);  
    }
    
}

//step1.할일들을 로드하는 함수를 호출한다.
function init(){
loadToDos();//1.로컬에 저장된 값이 있으면 html에 뿌려주고
toDoForm.addEventListener("submit",handleSubmit); //2. 할일 입력칸에 유저가 입력 후, submit을 날리면 할일을 정의한다.
}
init();

/*
할일을 삭제하기 위해선,
1. html에서 삭제 
2. 로컬스토리지에서 삭제 
모두 해줘야함.
*/