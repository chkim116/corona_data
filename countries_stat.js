function coronaStat(stat) {
  let countriesStat = stat.countries_stat;
  let coronaStat = document.querySelector(".corona_stat");
  let coronaStatHTML = countriesStat
    .map((item) => {
      return `<div class="corona_conutries">${item.country_name}</div>
    <div class="corona_case">${item.cases}명</div>`;
    })
    .join("");
  setInterval(atTime, 1000);
  coronaStat.innerHTML = coronaStatHTML;
}

function atTime() {
  let time = new Date();
  let Year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDay();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();

  let date = `${Year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  } ${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  let atTime = document.querySelector(".at_time");
  atTime.innerText = date;
}

function loadCorona() {
  return fetch(
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53",
      },
    }
  )
    .then((response) => response.json())
    .then((stat) => {
      coronaStat(stat);
    })

    .catch((err) => {
      console.log(err);
    });
}

loadCorona();

//https://doctorcodetutorial.blogspot.com/2020/03/create-coronavirus-tracker-in.html 출저
