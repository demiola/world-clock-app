function crudeUpdateTime() {
  // Los-Angeles

  let laElement = document.querySelector("#los-angeles");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laDate = moment().tz("America/Los_Angeles").format("MMMM D, YYYY");
  let laTime = moment()
    .tz("America/Los_Angeles")
    .format("H:mm:ss [<small>]A[</small>]");

  laDateElement.innerHTML = laDate;
  laTimeElement.innerHTML = laTime;

  // Lagos

  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosDate = moment().tz("Africa/Lagos").format("MMMM D, YYYY");
  let lagosTime = moment()
    .tz("Africa/Lagos")
    .format("H:mm:ss [<small>]A[</small>]");

  lagosDateElement.innerHTML = lagosDate;
  lagosTimeElement.innerHTML = lagosTime;

  // Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("H:mm:ss [<small>]A[</small>]");

  tokyoDateElement.innerHTML = tokyoDate;
  tokyoTimeElement.innerHTML = tokyoTime;

  // Ottawa

  let ottawaElement = document.querySelector("#ottawa");
  let ottawaDateElement = ottawaElement.querySelector(".date");
  let ottawaTimeElement = ottawaElement.querySelector(".time");
  let ottawaDate = moment().tz("America/Toronto").format("MMMM D, YYYY");
  let ottawaTime = moment()
    .tz("America/Toronto")
    .format("H:mm:ss [<small>]A[</small>]");

  ottawaDateElement.innerHTML = ottawaDate;
  ottawaTimeElement.innerHTML = ottawaTime;
}

// setInterval(crudeUpdateTime, 1000);

function displayDefaultTimes() {
  let defaultCities = ["lagos", "tokyo", "ottawa", "hyderabad"];
  let defaultCityTimeZones = [
    "Africa/Lagos",
    "Asia/Tokyo",
    "America/Toronto",
    "Asia/Calcutta",
  ];
  console.log(document.querySelector("#lagos"));
  for (let i = 0; i < defaultCities.length; i++) {
    let cityElement = document.querySelector(`#${defaultCities[i]}`);
    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".time");
    let cityDate = moment().tz(defaultCityTimeZones[i]);

    cityDateElement.innerHTML = cityDate.format("MMMM D, YYYY");
    cityTimeElement.innerHTML = cityDate.format("H:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  if (event.target.value !== "") {
    clearInterval(intervalId);
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#cities-data");
    intervalId = setInterval(function () {
      let cityTime = moment().tz(cityTimeZone);
      cityElement.innerHTML = `<div class="city" id="${cityTimeZone}">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("H:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <a href="index.html">All Cities</a>`;
    }, 1000);
  } else {
    window.location = "index.html";
  }
}

let intervalId = setInterval(displayDefaultTimes, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
