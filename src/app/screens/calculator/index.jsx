import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NumericInput from 'react-numeric-input';
import "react-datepicker/dist/react-datepicker.css";

import './style.scss';

class Calculator extends React.Component {
  state = {
    count: 34.5,
    resultCount: 0,
    indexCurrency: 0,
    whatCurrency: [],
    firstCurrency: [],
    allCountries: [],
    valueSelect: '',
  }

  changeCount = (value) => {
    this.setState({
      count: value,
      resultCount: value * (this.state.allCountries[this.state.indexCurrency].median_rate)
    })
  }

  changeCountry = (e) => {
    this.setState({
      valueSelect: e.target.value,
      indexCurrency: this.state.whatCurrency.indexOf(e.target.value),
      resultCount: this.state.count * (this.state.allCountries[this.state.indexCurrency].median_rate)
    }, this.resultMoney);
  }

  resultMoney = () => {
    this.setState({
      resultCount: this.state.count * (this.state.allCountries[this.state.indexCurrency].median_rate)
    })
  }

  componentDidMount() {
    axios.get('http://hnbex.eu/api/v1/rates/daily/')
      .then(res => {
        this.setState({
          allCountries: res.data,
          whatCurrency: res.data.map((name) => name.currency_code),
          valueSelect: res.data.map((name) => name.currency_code)[0],
          firstCurrency: res.data.map((name) => name.currency_code),
          resultCount: this.state.count * (res.data[this.state.indexCurrency].median_rate)
        })
      })
  }

  render() {

    return (
      <Grid
        className="calc-wrapper"
        alignItems="center"
        justify="center"
        container>
        <div className="content">
          <div className="value-data">
            <Typography>Enter Value</Typography>
            <div className="money">
              <NumericInput
                step={1}
                precision={2}
                value={this.state.count}
                onChange={this.changeCount} />
            </div>
          </div>
          <div className="currency-data">
            <Typography>Select Currency</Typography>
            <select onChange={this.changeCountry}>{this.state.firstCurrency.map((currency, index) =>
              <option key={index} value={currency}>{currency}</option>)}
            </select>
          </div>
        </div>
        <div className="count-money">
          <Typography>You Get</Typography>
          <Typography className="result">{this.state.resultCount}</Typography>
        </div>
      </Grid>
    )
  }
}

export default Calculator;

