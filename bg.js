//step3: 전역 변수로 지정할것 지정, 바디와 이미지 갯수
const body = document.querySelector("body");
const IMG_NUMBER = 3;

//step5: 랜덤하게 생성된 숫자중 하나가 입력됨 (1.jpg 등)
function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
   

}
  
//step4: 랜덤하게 1,2,3,을 리턴하는 함수 생성
function genRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}
//step1: init함수 생성
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

//step2: init함수 호출
init(); 