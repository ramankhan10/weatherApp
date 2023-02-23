let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const apiKey = "c6907920fb744c4d3eeddf15e2a31be3";

function convertToCel(value) {
  return (value - 273).toFixed(2);
}

async function GetWeather() {
  let weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${cityInput.value}&appid=${apiKey}`)
  ).json();
  setInfo(weatherResult);
}

function setInfo(data) {
  let cityName = data["name"];
  let description = data["weather"][0]["description"];
  let temp = data["main"]["temp"];
  let wind = data["wind"]["speed"];

  cityInput.innerHTML = `City :  ${cityName}`;
  descOutput.innerHTML = `Description : ${description}`;
  tempOutput.innerHTML = `Temprature : ${convertToCel(temp)}`;
  windOutput.innerHTML = `Wind Speed ${wind} km/h`;
}

addInput.addEventListener("click", GetWeather);
