const weatherStation = "Q061";
const wetterSpan = document.querySelector("#wetter");

const currentFetch = async () => {
  const response = await fetch(
    `https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/current_measurement_${weatherStation}.json`
  );
  let currentData = await response.json();
  let currentTemp = currentData.temperature;
  wetterSpan.innerText = `Es hat aktuell ${Math.floor(currentTemp / 10)}°C.`;
};

currentFetch();
