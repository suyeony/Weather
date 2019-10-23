    const ul = document.getElementById('forecast--list');
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=69c507e0506449860f549fde4514f6f8&units=imperial'

    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].main);
    document.getElementById("forecast--list").innerHTML = data.weather[0].main
    document.getElementById("forecast--list").innerHTML = data.main.temp
    });



  