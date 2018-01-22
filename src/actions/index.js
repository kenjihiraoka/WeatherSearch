import axios from 'axios';

const API_KEY = 'f25cad8571ac39c7071c83c46774bee6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//___________________ACTIONS____________________________
export const FETCH_WEATHER = 'FETCH_WEATHER';


//________________ACTIONS CREATORS______________________
export function fetchWeather(city, country) {
	const url = `${ROOT_URL}&q=${city},${country}`;
	const request = axios.get(url);								//make a request with payload and return a promise

	//console.log('Request:', request);

	return{
		type: FETCH_WEATHER,
		payload: request  										//payload is a promise returned from request
	}
}	