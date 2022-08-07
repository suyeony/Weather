

function search() {   
    const input  = document.getElementById("myinput").value;
    const ul = document.getElementById('forecast--unlist');
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=69c507e0506449860f549fde4514f6f8&units=imperial';

    // when input is empty 
    if (input === "") {
        alert("please enter city name");
    }

    else {
        document.querySelector('.date').innerHTML = Date();
        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            if (data.cod === "404") {
                console.log("wrong city name.");
                alert("please enter correct city name");
            }
            else {
                console.log(data);
                console.log(data.name);
                console.log(data.main.temp);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                document.getElementById("humidity").innerHTML = "Humidity";
                document.getElementById("wind").innerHTML = "Wind Speed";
                document.getElementById("forecast--icon").innerHTML =
                '<img src="http://openweathermap.org/img/wn/' +
                data.weather[0].icon +
                '.png"></img>';
                //document.getElementById("forecast--city").innerHTML = input;
                document.getElementById("forecast--temp").innerHTML = data.main.temp + "  F";
                document.getElementById("forecast--main").innerHTML = data.weather[0].main;
                document.getElementById("forecast--humidity").innerHTML = data.main.humidity + "%";
                document.getElementById("forecast--wind").innerHTML = data.wind.speed + " km/j";

                //document.querySelector('.forecast-part').removeAttribute("hidden");
                document.querySelector('.forecast ul').classList.add('forecast--unlist');
                document.querySelector('.forecast ul').classList.remove('forecast--unlist--initial');
            }

        });   
    }

}   

if (document.querySelector('#myinput') === null) {
    document.querySelector('.forecast ul').classList.add('forecast--unlist');
    document.querySelector('.forecast ul').classList.remove('forecast--unlist--initial');
}


function buttonClick() {
    const button = document.getElementById("search_button");
    button.addEventListener("click", search);
}

window.addEventListener("load", buttonClick);
document.querySelector('#myinput').addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        search();
    }
});
 




  