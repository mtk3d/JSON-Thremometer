var hand = document.querySelector("#hand");
var temperature = document.querySelector("#temp");

function fetchTemperature(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      writeToHand(response);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function writeToHand(response) {
  output = response.feeds[99].field2;
  temperature.innerHTML = Math.round(output) + '°F';
  rotate(output);
}

function rotate(precent) {
  var deg = Math.round(280 / 100 * precent);
  deg += 40;
  hand.style.transform = 'rotate(' + deg + 'deg)';
}