const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'e66680bcee745a2dbd15ace4cbe2cecb'

const newQuery = (e) =>{
  if (e.keyCode == "13") {
    result(search.value);
  }
}

const result = (cityname) => {
  let query = `${url}weather?q=${cityname}&appid=${key}&units=metric&lang=tr`;
  fetch(query).then(weather => {
    return weather.json();
  })
  .then(formatJsonData)
}

const formatJsonData = (weather) => {
  console.log(weather);
  
  document.querySelector(".city").innerHTML = `${weather.name} , ${weather.sys.country}`;
  document.querySelector(".temp").innerHTML = Math.floor(`${weather.main.temp}`);
  document.querySelector(".min").innerHTML = Math.floor(`${weather.main.temp_min}`);
  document.querySelector(".max").innerHTML = Math.floor(`${weather.main.temp_max}`);
  document.querySelector(".desc").innerHTML = `${weather.weather[0].description}`

}


const search = document.getElementById("search");
search.addEventListener("keypress" , newQuery);