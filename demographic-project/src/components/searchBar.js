import React, { Component } from "react"
import { fetchCountries, fetchRateExchange } from './../actions'
import { connect } from "react-redux";
import lodash from "lodash";

class SearchBar extends Component {

	componentWillMount() {
		this.props.fetchCountries()
	}

	renderSelectCountries () {
		return (
				<select onChange={e => this.onChangeCountry(e)} name="" id="">
					{
						this.props.countries.map(c => (
							<option value={c.code} key={c.code}>{c.name}</option>
						))
					}
				</select>
		)
	}

	onChangeCountry (event) {
	    const countryCode = event.target.value;
	    const country = lodash.find(this.props.countries, {code : countryCode})
		this.props.fetchRateExchange(country)
	}

	render () {
		return (
				<form action="">
					{this.renderSelectCountries()}
				</form>
		)
	}
}

const mapDispatchToProps = {
	fetchCountries,
    fetchRateExchange
}

const mapStateToProps = store => {
	return {
		countries : store.countriesReducer.countries
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

