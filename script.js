// https://api.weatherapi.com/v1/current.json?key=4649898b6ad7447ea2163809262001&q=Ahmedabad&aqi=yes


let searchForm = document.querySelector('.search-form');
let inputField = document.querySelector('.searchField');
let tempField = document.querySelector('.temp');  
let locationField = document.querySelector('.location');


searchForm.addEventListener('submit',function(e){
    e.preventDefault();

    targetLocation = inputField.value;

    fetchWeatherData(targetLocation);
})





let targetLocation = "Ahmedabad";



// DOM Operations

async function fetchWeatherData(targetLocationlocation){

    // fetch - inbuilt vanilla js api

    const url = `https://api.weatherapi.com/v1/current.json?key=4649898b6ad7447ea2163809262001&q=${targetLocation}&aqi=yes`;

    const res = await fetch(url);

    // console.log(res);

    const data = await res.json();


    console.log(data);

    let temparature = data.current.temp_c;
    tempField.innerText = temparature;
    locationField.innerText = targetLocation;
    // console.log(temparature);
}

fetchWeatherData();