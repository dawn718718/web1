const weather = document.querySelector(".js-weather")
const API_KEY = "0beeb76e3caa3d66dddc5ad35050962e";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.latitude;
    const coordsObj = {
     
        latitude,
        longitude
    }; 
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
} 

function handleGeoError () {
    console.log('Cannot access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) { //로컬에 저장된 좌표값이 없는 경우
        askForCoords()
    } else { //로컬에 저장된 값이 있는 경우
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);


    }
}

function init(){
    loadCoords();
}
init();