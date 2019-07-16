import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactChartKick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'


ReactChartKick.addAdapter(Chart)

class RateExchangeListItem extends Component {
    render() {

        console.log(this.props.rateExchange)

        const {rates, currencyCode} = this.props.rateExchange

        return (
            <tr>
                <td width="20%">
                    {this.props.rateExchange.name}<br/>
                    <img width='20%' src={this.props.rateExchange.flag}></img>
                </td>
                <td width='80%'>
                    <AreaChart xtitle="date" ytitle={currencyCode} data={this.formateData(rates, currencyCode)} />
                </td>
            </tr>
    )
        ;
    }

    formateData (rate, currencyCode) {
        return Object.keys(rate).map(date => {
            return [date, rate[date][currencyCode]]
        })
    }


}


function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(RateExchangeListItem);
