let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const apiKey = "c6907920fb744c4d3eeddf15e2a31be3";

async function GetWether() {
  let wetherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityInput.value}&lon={lon}&appid=${apiKey}`
    )
  ).json();
}

addInput.addEventListener("click", GetWether);
