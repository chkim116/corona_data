function atTime() {
  const time = new Date();
  const Year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  const date = `${Year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  } ${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;

  const atTime = document.querySelector(".at_time");

  return (atTime.innerText = date);
}
