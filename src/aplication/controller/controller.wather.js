const fetch = require('node-fetch');
const logOut = require('../utils/logOut');
const logOk = require('../utils/logOk');

const method = {method: 'get'};
const API_COUNTRY_URL = "https://restcountries.eu/rest/v2/all";
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=-64.18&lon=-31.41&appid=667b3badbca59f33cecf7ca17ccb22dc&units=metric`;


var HEADERS = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "dcbb2a04e0msh948d16eb9732fc6p1017f6jsn6ef9294708c5"
  }
};

const getUrl = (url, method)=>{
    return fetch(url, method)
    .then(response => response.json())
    .catch((err) =>{
        console.log('Error:' , err);
        logOut.error(` - La data tuvo un error`);
    })
}


const GetCountriesAndTemperature = async(req, res)=>{
    const data = await getUrl(API_COUNTRY_URL, method);

    
    res.json({
      'info': data
    })
    logOk.info(` - Se paso correctamente la data.`);

    for(let i in data){
      try{

    console.log('------------------------------');
    let lat = data[i].latlng[0];
    let lng = data[i].latlng[1];
    let nameContrie = data[i].name;

    console.log(`Name: ${nameContrie}`);
    console.log(`Latitud: ${lat} - Longitud: ${lng}`);
    
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=667b3badbca59f33cecf7ca17ccb22dc&units=metric`;
    
    const dataTemperature = await getUrl(urlWeather, method);
    let temperature = dataTemperature.main.temp;
    console.log(`Temperature: ${temperature}`);
      }catch(err){
          console.log('La data tiene un error');
          logOut.error(` - La data tuvo un error`);
      }
   }
}


module.exports = GetCountriesAndTemperature;