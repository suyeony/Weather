    const ul = document.getElementById('forecast--list');
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=69c507e0506449860f549fde4514f6f8'

    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
    console.log(data)
    });



  