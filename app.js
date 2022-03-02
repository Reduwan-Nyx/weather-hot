// api keys
const API_KEY  = `1d20ae2bb9da56d38b0a5266ca27eefc`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main);
//    set weather icons
const url = `
http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png
`;
const imgIcon = document.getElementById('weather-icon');
imgIcon.setAttribute('src', url);
console.log(temperature);


}