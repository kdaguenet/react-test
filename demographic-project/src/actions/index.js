import axios from "axios"

const GET_COUNTRIES = "GET_COUNTRIES"

function fetchCountries () {
	return function (dispatch) {
		axios.get("https://restcountries.eu/rest/v2/all").then(axiosResponse => {
			dispatch({type: GET_COUNTRIES, payload: axiosResponse.data})
		})
	}
}

function fetchRateExchange (country) {
	return function (dispatch) {
	    axios.get(`https://api.exchangeratesapi.io/history?start_at=${getLastMounth()}&end_at=${formatedDate(new Date())}&base=USD&symbols=${country.currencyCode}`).then(axiosResponse => {
	        dispatch({type: 'GET_RATE_EXCHANGE', payload: {rates: axiosResponse.data.rates, ...country}})
        })
    }
}

function formatedDate (date) {
    return date.toISOString().split("T")[0]
}

function getLastMounth () {
    let now = new Date()
    now.setMonth(now.getMonth() - 1)
    return formatedDate(now)
}

export {GET_COUNTRIES, fetchCountries, fetchRateExchange}
