/*
He always starts with the following form to make an simple app.

1. 변수로 생성할 것들 먼저 선언
2. 함수 생성 후, 함수내, 변수로 처리할 것들 변수로 생성
3. 아래와 같은 init 함수 안에 필요한 실행할 함수 넣어서 마지막에 init함수 호출!

function init() {
    
    실행할 함수 넣기.
}
init()

*/

/* 예제1. 시계 만들어보기 
프로그래밍 순서:
1. 함수들을 실행할 최종 함수 init()을 선언한다.
2. html에서 컨트롤이 필요한 요소를 변수로 선언 
3. 시간 디스플레이 함수 내에, 현재의 시,분,초를 저장해 놓을 변수 생성 및 선언 
4. 시간 디스플레이 함수 내에, 해당 시분초를 html에 보여주도록 innerText객체 사용하여 디스플레이.
5. init함수내에 시간 디스플레이 함수를 실행하게 한다.
6. init함수 내에 시간을 매 1000밀리세컨드(=1초)마다 갱신하여 보여주도록 하는 함수를 실행하게 한다.
7. 각 숫자의 단위가 1자리 일때는(=9보다 작을 때는), 앞에 0을 넣어주도록 조건을 만들어주도록 시간 디스플레이 함수를 수정한다.

필요한 함수: 
a. 현재의 시,분,초를 가져오는 JS의 내장함수: getTime()
b. 특정 함수를 매 특정 시간마다 계속 반복해서 실행하게 하는 JS의 내장함수: setInterval()
*/
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const myDate = new Date();
    const myMinute = myDate.getMinutes();
    const myHour = myDate.getHours();
    const mySecond = myDate.getSeconds();
   // clockTitle.innerText = `${myHour}:${myMinute}:${mySecond}`;
   //위와 같이 했을 경우: 초가 10보다 작을 경우 한자리로 줄어들어보인다. 안예쁨.
   //삼항연산자를 사용히여 9초 이하일때는 앞자리에 0을 넣어주도록 조건을 만들어줌.
   // 형식: 조건 ? 트루일때 리턴할 값 : 폴스일때 리턴할 갓
   clockTitle.innerText = `${myHour<10? `0${myHour}` : myHour}:${myMinute<10 ? `0${myMinute}` : myMinute}:${mySecond <10 ? `0${mySecond}` : mySecond}`;
}

function init() {
    getTime();
    setInterval(getTime,1000); //어떤 함수를 특정 시간 간격마다 계속 실행하게 하는 내장 함수
}
init();