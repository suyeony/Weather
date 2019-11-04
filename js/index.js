    const input  = document.getElementById("myinput");
    const button = document.getElementById("search_button");
    
    const ul = document.getElementById('forecast--list');
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=69c507e0506449860f549fde4514f6f8&units=imperial';
    

    function search() {
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].main);
    document.getElementById("forecast--icon").innerHTML =
    '<img src="http://openweathermap.org/img/wn/' +
    data.weather[0].icon +
    '.png"></img>';
    document.getElementById("forecast--main").innerHTML = data.weather[0].main
    document.getElementById("forecast--temp").innerHTML = data.main.temp + "  F"
    });
}


    button.addEventListener("click", search);


window.addEventListener("load", buttonClick);
 




  