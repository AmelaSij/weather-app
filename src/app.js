function displayTemperature(response){
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement =document.querySelector("#description");
//let precipitationElement =document.querySelector("#precipitation");
let humidityElement =document.querySelector("#humidity");
let windElement =document.querySelector("#wind");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
//precipitationElement.innerHTML=response.data.weather[0].description;
humidityElement.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);
}
let apiKey="716045c92c880fd62174c7a8b0b50a0d";
let cityName ="New York";
let units ="metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
