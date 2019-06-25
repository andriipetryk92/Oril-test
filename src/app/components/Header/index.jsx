import * as React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconCalc from '../../../assets/calculator.png';
import IconCurrency from '../../../assets/currency.png';
import history from '../../utils/history';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from '../../redux/auth/actions'
import './style.scss';


class Header extends React.Component {

  logout = () => {
    this.props.logOut();
    history.push("/");
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="pages">
          <div className="calc">
            <Link to={'/calculator'}>
              <img alt="Icon Calculator" src={IconCalc} />
              <Typography>
                Calculator
            </Typography>
            </Link>
          </div>
          <div className="currency">
            <Link to={'/currencies'}>
              <img alt="Icon Currency" src={IconCurrency} />
              <Typography>
                Currencies
            </Typography>
            </Link>
          </div>
        </div>
        {email ?
          <div className="user">
            <Typography>{email}</Typography>
            <Button className="logout" onClick={this.logout}>Logout</Button>
          </div>
          : null}
      </header>
    )
  }
}

const mapStateToProps = state => {
  const email = state.auth.profile ? state.auth.profile.email : null;
  return {
    email
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ logOut }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
