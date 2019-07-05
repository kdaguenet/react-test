import React, { Component } from "react"
import { fetchCountries } from './../actions'
import { connect } from "react-redux";

class SearchBar extends Component {

	componentWillMount() {
		this.props.fetchCountries()
	}

	renderSelectCountries () {
		return (
				<select name="" id="">
					{
						this.props.countries.map(c => (
							<option value={c.code} key={c.code}>{c.name}</option>
						))
					}
				</select>
		)
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
	fetchCountries
}

const mapStateToProps = store => {
	return {
		countries : store.countriesReducer.countries
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

