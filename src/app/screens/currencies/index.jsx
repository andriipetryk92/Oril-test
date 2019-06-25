import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "react-datepicker/dist/react-datepicker.css";
import './style.scss';

class Currencies extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    allData: null,
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  }

  getData = () => {
    axios.get(`http://hnbex.eu/api/v1/rates/EUR/?from=${this.state.startDate.toISOString().slice(0, 10)}&to=${this.state.endDate.toISOString().slice(0, 10)}`)
      .then(response => {
        this.setState({
          allData: response.data
        })
      })
  }

  render() {

    return (
      <Grid
        className="currencies-wrapper"
        alignItems="center"
        justify="center"
        container>
        <div className="content">
          <div className="content-date">
            <div className="start-date">
              <Typography>Select start date </Typography>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={this.state.startDate}
                onChange={this.handleChangeStart}
              />
            </div>
            <div className="end-date">
              <Typography>Select end date</Typography>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={this.state.endDate}
                onChange={this.handleChangeEnd}
              />
            </div>
          </div>
          <Button className="get-data" variant="contained" onClick={this.getData}>
            Get Data
        </Button>
        </div>
        {this.state.allData ?
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Buying</th>
                <th>Selling</th>
                <th>Median</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allData.map((value, index) => (
                <tr key={index}>
                  <td>{value.date}</td>
                  <td>{value.buying_rate}</td>
                  <td>{value.selling_rate}</td>
                  <td>{value.median_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          : null}
      </Grid>
    )
  }
}


export default Currencies;

