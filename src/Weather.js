//import { React } from "react";
import axios from 'axios';

export default function Weather(props){
  function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp} C`);}

  let apiKey = "fe1483f743b581b5520a1b725af03a49";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}