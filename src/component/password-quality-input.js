import React from 'react';
import ReactDOM from 'react-dom';
import zxcvbn from 'zxcvbn'

export default class PasswordQualityInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      quality: "VERY WEAK"
    };
  }

  measureQuality(password) {
    let result = zxcvbn(password);
    let strength = result.score;
    if (strength == 0) {
      this.setState({quality: "VERY WEAK"});
    } else if (strength == 1) {
      this.setState({quality: "WEAK"});
    } else if (strength == 2) {
      this.setState({quality: "MODERATE"});
    } else if (strength == 3) {
      this.setState({quality: "STRONG"});
    } else if (strength == 4) {
      this.setState({quality: "VERY STRONG"});
    }
  }

  handleChange(event) {
    this.measureQuality(event.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" name="passwordQuality" />
        <span>{this.state.quality}</span>
      </div>
    );
  }
}