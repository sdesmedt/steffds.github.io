let timezoneText = document.getElementById("location-timezone");
let degreeNum = document.getElementById("temp-degree");
let minDegreeNum = document.getElementById("temp-min-degree");
let maxDegreeNum = document.getElementById("temp-max-degree");
let degreeUnit = document.querySelectorAll("temp-unit");
let describeTemp = document.getElementById("temp-description");
let weatherIcon = document.getElementById("icon");
let windSpeed = document.getElementById("wind-speed");
let windDirection = document.getElementById("wind-direct");
let windArrow = document.getElementById("wind-arrow");



function convertDegC(temp){
    return (temp - 273.15).toFixed(0);
}
/* function convertDegF(temp){
    return ((temp - 273.15) * (9/5) + 32);
} */


function getCoords () {
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=782e82bfe91c59fa85ded3a4bd35393c";
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    timezoneText.innerText = data.name + ", " + data.sys.country;
                    degreeNum.innerText = convertDegC(data.main.temp);
                    maxDegreeNum.innerText = convertDegC(data.main.temp_max);
                    minDegreeNum.innerText = convertDegC(data.main.temp_min);
                    describeTemp.innerText = data.weather[0]["description"];
                    describeTemp.style.textTransform = "capitalize";
                    let iconCode = data.weather[0]["icon"];
                    weatherIcon.src="http://openweathermap.org/img/wn/"+iconCode+"@4x.png";
                    windSpeed.innerText = data.wind.speed;
                    windDirection.innerText = data.wind.deg;
                    windArrow.style.transform = "rotate("+data.wind.deg+"deg)";
                    document.getElementById("weather-app").style.display = "grid";
                    document.getElementById("loading-info").style.display = "none";
                })
            
            })
    } else {
        
    }
}

window.addEventListener('load',getCoords);



