$(document).ready(function() {
    Object.size = function(obj) {
      var size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
  
    let weatherData,
      place,
      lat,
      lon,
      temp,
      humidity,
      country,
      weatherID,
      month,
      time,
      celsius = true;
  
    // set current time
    function setTime() {
      time = new Date();
      //console.log(time.now());
      month = parseInt(time.getMonth())+1;
      $("#refreshTime").html(
        "Refreshed: " +
          time.getDate() +
          "." +
          month +
          "." +
          time.getFullYear() +
          ", " +
          ('0' + time.getHours()).slice(-2) +     // to get the leading zero's
          ":" +
          ( '0' + time.getMinutes()).slice(-2) +
          ":" +
          ('0' + time.getSeconds()).slice(-2)
      );
    }
  
    // set temp in correct format
    function setTemp(temp) {
      if (celsius) {
        $("#temp").html("Temperature: " + temp + "°C");
      } else {
        $("#temp").html("Temperature: " + (temp * 1.8 + 32).toFixed(1) + "°F");
      }
    }
  
    // extract weather info and insert it into the html
    function insertWeather(jsonData) {
      weatherData = JSON.stringify(jsonData);
  
      let weather = "";
  
      // console.log(weatherData);
  
      place = jsonData.name;
      country = jsonData.sys.country;
  
      // get weather condiditions
      weather = jsonData.weather[0].main;
  
      humidity = jsonData.main.humidity;
  
      $("#place").html(place + ", " + country);
      $("#coords").html("Lat: " + lat + ", Lon: " + lon);
      $("#weather").html("Weather conditions: " + weather);
      $("#humidity").html("Humidity: " + humidity + "%");
      $("#wIcon").prop(
        "src",
        "http://openweathermap.org/img/w/" + jsonData.weather[0].icon + ".png"
      );
      setTime();
      setTemp((jsonData.main.temp - 273.15).toFixed(1));
  
      weatherID = jsonData.weather[0].id;
  
      
      if (weatherID >= 200 && weatherID < 300) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/657uxra2mp6ditu/stormy_1.jpeg?dl=1"
        );
        $("#weatherPic").prop("alt", "storm");
      } else if (weatherID >= 300 && weatherID < 400) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/ywkclrofpqg50xu/drizzle.jpg?dl=1"
        );
        $("#weatherPic").prop("alt", "drizzle");
      } else if (weatherID >= 500 && weatherID < 600) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/gqtrr9yc0mlhms4/rain_1.jpeg?dl=1"
        );
        $("#weatherPic").prop("alt", "rain");
      } else if (weatherID >= 600 && weatherID < 700) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/zyjymwy9msxsnv5/Snowing_1.jpg?dl=1"
        );
        $("#weatherPic").prop("alt", "snow");
      } else if (weatherID >= 700 && weatherID < 800) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/3zli1xok3jo524z/foggy_1.jpeg?dl=1"
        );
        $("#weatherPic").prop("alt", "foggy");
      } else if (weatherID == 800) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/4oej6vm2pq6va7n/sunshine_1.jpg?dl=1"
        );
        $("#weatherPic").prop("alt", "clear");
      } else if (weatherID > 800 && weatherID < 900) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/2q8d7honjyog7gl/cloudy_1.jpg?dl=1"
        );
        $("#weatherPic").prop("alt", "cloudy");
      } else if (weatherID >= 900 && weatherID < 1000) {
        $("#weatherPic").prop(
          "src",
          "https://www.dropbox.com/s/mlvv61fnxskma8s/windy_1.jpeg?dl=1"
        );
        $("#weatherPic").prop("alt", "windy");
      }
      else {
        $("#weatherPic").prop("alt", "strange weather phenomena :)");
      }
    }
  
    // use position data to get weather info and call insertWeather function
    function showPosition(position) {
      lat = position.coords.latitude.toFixed(2);
      lon = position.coords.longitude.toFixed(2);
  
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&APPID=d3903f7dcfee9466231bc4390fd7e8ea",
        dataType: "json",
        cache: false
      })
        .done(function(data) {
          insertWeather(data);
        })
        .fail(function(xhr, status, errorThrown) {
          console.log("Error: " + errorThrown);
          console.log("Status: " + status);
          console.log("AJAX error: " + JSON.stringify(xhr));
        })
        .always(function() {
          console.log("the request is complete");
        });
    }
  
    // get position and call show position function
    navigator.geolocation.getCurrentPosition(showPosition);
  
    // when °C is clicked
    $("#optionC").click(function() {
      if (!celsius) {
        $("#optionC").prop("checked", true);
        $("#labelC").addClass("active");
        $("#optionF").prop("checked", false);
        $("#labelF").removeClass("active");
        navigator.geolocation.getCurrentPosition(showPosition);
        celsius = true;
      }
    });
  
    // when °F is clicked
    $("#optionF").click(function() {
      if (celsius) {
        $("#optionF").prop("checked", true);
        $("#labelF").addClass("active");
        $("#optionC").prop("checked", false);
        $("#labelC").removeClass("active");
  
        navigator.geolocation.getCurrentPosition(showPosition);
        celsius = false;
      }
    });
  });