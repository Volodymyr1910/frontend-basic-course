async function getCoordinatesByThen() {
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
    });

  // const latitude =

  // const longitude =

  // const city =
} // end async function getCoordinates ()

async function getCoordinates() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();

  getWeather(data);

  // робота з даними об'єкту без деструктуризації
  // const latitude = data.latitude;
  // const longitude = data.longitude;
  // const city = data.city;

  // робота з даними об'єкту з деструктуризацією
  //const {latitude, longitude, city} = data

  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  //   const coordinates = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`

  //   const resWeather = await fetch(`${coordinates}`);
  //   const dataWeather = await resWeather.json();

  //   const {temperature, interval, weathercode, windspeed, winddirection} = dataWeather.current_weather;

  //   // const {temperature, interval, weathercode, windspeed, winddirection} = data.current_weather_units
  //    const temperatureUnit = dataWeather.current_weather_units.temperature;
  //    const intervalUnit = dataWeather.current_weather_units.interval;
  //    const weathercodeUnit = dataWeather.current_weather_units.weathercode;
  //    const windspeedUnit = dataWeather.current_weather_units.windspeed;
  //    const winddirectionUnit = dataWeather.current_weather_units.winddirection;

  //    const temperatureValue = `${temperature} ${temperatureUnit}.`
  //    const intervalValue = `${temperature} ${intervalUnit}.`
  //    const weathercodeValue = `${temperature} ${weathercodeUnit}.`
  //    const windspeedValue = `${temperature} ${windspeedUnit}.`
  //    const winddirectionValue = `${temperature} ${winddirectionUnit}.`
} // end async function getCoordinates ()

getCoordinates();

async function getWeather(data) {
  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  const { latitude, longitude, city } = data;

  const coordinates = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const resWeather = await fetch(`${coordinates}`);
  const dataWeather = await resWeather.json();

  const { temperature, interval, weathercode, windspeed, winddirection } =
    dataWeather.current_weather;

  // деструктуризація із зміною імені змінної => ключ зліва : ім'я змінної справа temperature:temperatureUnit
  const {
    temperature: temperatureUnit,
    interval: intervalUnit,
    weathercode: weathercodeUnit,
    windspeed: windspeedUnit,
    winddirection: winddirectionUnit,
  } = dataWeather.current_weather_units;
  // const {temperature, interval, weathercode, windspeed, winddirection} = data.current_weather_units

  //    const temperatureUnit = dataWeather.current_weather_units.temperature;
  //    const intervalUnit = dataWeather.current_weather_units.interval;
  //    const weathercodeUnit = dataWeather.current_weather_units.weathercode;
  //    const windspeedUnit = dataWeather.current_weather_units.windspeed;
  //    const winddirectionUnit = dataWeather.current_weather_units.winddirection;

  const temperatureValue = `${temperature} ${temperatureUnit}.`;
  const intervalValue = `${interval} ${intervalUnit}.`;
  const weathercodeValue = `${weathercode}`;
  const windspeedValue = `${windspeed} ${windspeedUnit}.`;
  const winddirectionValue = `${winddirection} ${winddirectionUnit}.`;

  console.log(weathercodeValue);

  console.log(weathercode);
  const weathercodeWordsValue = weathercodeTranlation(weathercode);

  console.log("code", weathercodeWordsValue);

  createInPage(
    city,
    temperatureValue,
    intervalValue,
    weathercodeWordsValue,
    windspeedValue,
    winddirectionValue
  );
} // end async function getWeather(data)

function weathercodeTranlation(weathercodeValue) {
  //   console.log(weathercodeValue);
  //   let weathercodeWordsValue = "";
  switch (weathercodeValue) {
    case 0:
      return "Clear sky";
    case 77:
      return "Snow grains";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense intensity drizzle";
    case 56:
      return "Light intensity freezing drizzle";
    case 57:
      return "Dense intensity freezing drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy intensity rain";
    case 66:
      return "Light freezing rain";
    case 67:
      return "Heavy intensity freezing rain";
    case 71:
      return "Slight snow fall";
    case 73:
      return "Moderate snow fall";
    case 75:
      return "Heavy intensity snow fall";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Violent rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Slight or moderate thunderstorm";
    case 96:
      return "Thunderstorm with slight ";
    case 99:
      return "Thunderstorm with heavy hail";
  } //switch (weathercodeValue)

  //if(weathercodeValue === 1 || weathercodeValue === 2 || weathercodeValue === 3) weathercodeWordsValue = "Mainly clear, partly cloudy, and overcast";
  // if(weathercodeValue === 45 || weathercodeValue === 48) weathercodeWordsValue = "Fog and depositing rime fog";
  // if(weathercodeValue === 51 || weathercodeValue === 53 || weathercodeValue === 55) weathercodeWordsValue = "Drizzle: Light, moderate, and dense intensity";
  // if(weathercodeValue === 56 || weathercodeValue === 57) weathercodeWordsValue = "Freezing Drizzle: Light and dense intensity";
  // if(weathercodeValue === 61 || weathercodeValue === 63 || weathercodeValue === 65) weathercodeWordsValue = "Rain: Slight, moderate and heavy intensity";

  // if(weathercodeValue === 66 || weathercodeValue === 67 || weathercodeValue === 65) weathercodeWordsValue = "Freezing Rain: Light and heavy intensity";
  // if(weathercodeValue === 71 || weathercodeValue === 73 || weathercodeValue === 75) weathercodeWordsValue = "Snow fall: Slight, moderate, and heavy intensity";
  // if(weathercodeValue === 80 || weathercodeValue === 81 || weathercodeValue === 82) weathercodeWordsValue = "Rain showers: Slight, moderate, and violent";
  // if(weathercodeValue === 85 || weathercodeValue === 86) weathercodeWordsValue = "Snow showers slight and heavy";
  // if(weathercodeValue === 96 || weathercodeValue === 63 || weathercodeValue === 99) weathercodeWordsValue = "Thunderstorm with slight and heavy hail";

  //   return weathercodeWordsValue;
} //end function  weathercodeTranlation

function createInPage(
  city,
  temperatureValue,
  intervalValue,
  weathercodeWordsValue,
  windspeedValue,
  winddirectionValue
) {
  let place = document.createElement("div");
  let h2 = document.createElement("h2");
  let ptemperature = document.createElement("p");
  let pinterval = document.createElement("p");
  let pweathercodeWordsValue = document.createElement("p");
  let pwindspeedValue = document.createElement("p");
  let pwinddirectionValue = document.createElement("p");

  h2.innerText = `${city}`;

  ptemperature.innerText = `Temperature: ${temperatureValue}`;
  pinterval.innerText = `Interval: ${intervalValue}`;
  pweathercodeWordsValue.innerText = `Weather look: ${weathercodeWordsValue}`;
  pwindspeedValue.innerText = `Wind speed: ${windspeedValue}`;
  pwinddirectionValue.innerText = `Wind direction: ${winddirectionValue}`;

  place.append(
    h2,
    ptemperature,
    pinterval,
    pweathercodeWordsValue,
    pwindspeedValue,
    pwinddirectionValue
  );

  document.querySelector("main").appendChild(place);
} // end function createInPage ()

/* строки 227 - 248 потрібні для лоадера */
const loader = document.getElementById('loader');
const weatherContainer = document.getElementById('weather-container');

// Показать лоадер
function showLoader() {
  loader.classList.toggle('hidden'); // Убираем класс 'hidden', чтобы показать лоадер
  weatherContainer.classList.toggle('hidden'); // Скрываем контейнер с погодой
}

// Скрыть лоадер
function hideLoader() {
  loader.classList.toggle('hidden'); // Добавляем класс 'hidden', чтобы скрыть лоадер
  weatherContainer.classList.toggle('hidden'); // Показываем контейнер с погодой
}

// Имитация загрузки данных
showLoader(); // Показываем лоадер

setTimeout(() => {
  hideLoader(); // Скрываем лоадер через 3 секунды
}, 3000);