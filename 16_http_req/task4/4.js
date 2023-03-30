let req = new XMLHttpRequest();
const city = 'Minsk';
const appid = 'a94d0a5ac08570add4b47b8da933f247';
req.onload = function () {
  const obj = JSON.parse(req.response);

  const city = document.querySelector('.city');
  const date = document.querySelector('.date');
  const curWeather = document.querySelector('.curWeather');
  const icon = document.querySelector('.icon');
  const temp = document.querySelector('.temp');
  const speed = document.querySelector('.speed');
  const forecast = document.querySelector(".forecast");

  city.textContent = obj.city.name;
  date.textContent = obj.list[0].dt_txt;
  curWeather.textContent = obj.list[0].weather[0].main;
  icon.setAttribute('src', `https://openweathermap.org/img/wn/${obj.list[0].weather[0].icon}@2x.png`);
  temp.textContent = `-${obj.list[0].main.temp} °C`;
  speed.append(`${obj.list[0].wind.speed} m/s`);
  let count = 0;
  for(let i = 1; i < Object.keys(obj.list).length; i += 6) {
    const div = document.createElement('div');
    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = obj.list[i].dt_txt;
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${obj.list[i].weather[0].icon}@2x.png`);
    const temp = document.createElement('div');
    temp.className = 'temp';
    temp.textContent = `-${obj.list[i].main.temp} °C`;

    div.append(date);
    div.append(icon);
    div.append(temp);

    forecast.appendChild(div);
  }
}
req.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`);
req.send();