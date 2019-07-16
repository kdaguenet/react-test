import React, {Component} from "react"
import {connect} from "react-redux";
import RateExchangeListItem from "./rateExchangeListItem"

class RateExchangeList extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Pays</th>
                    <th>Valeur de la monnaie par rapport au dollars</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.rateExchangeList.map((r, i) => {
                        return <RateExchangeListItem key={r.code + i} rateExchange={r}/>
                    })
                }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = store => {
    return {
        rateExchangeList: store.rateExchangeReducer.rateExchangeList
    }
}

export default connect(mapStateToProps, undefined)(RateExchangeList)

