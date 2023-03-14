function showTime() {
  const date = new Date();
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');

  hour.innerHTML = date.getHours() + ":";
  minute.innerHTML = date.getMinutes()+ ":";
  second.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  return {hour, minute, second};
}

setInterval(showTime, 1000);