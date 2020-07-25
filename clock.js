function atTime() {
  let time = new Date();
  let Year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  let date = `${Year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  } ${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;

  let atTime = document.querySelector(".at_time");

  return (atTime.innerText = date);
}
