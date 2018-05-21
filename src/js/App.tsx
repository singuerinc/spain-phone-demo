import * as React from 'react';
import {
  isFixed,
  isFreeCall,
  isHighCost,
  isLowCost,
  isMobile,
  isOther,
  stateByNumber
} from 'spain-phone';

const className = v => (v ? 'o-100' : 'o-20');

class App extends React.Component {
  state = {
    value: ''
  };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const classIsFixed = className(isFixed(value));
    const classIsMobile = className(isMobile(value));
    const classIsFreeClass = className(isFreeCall(value));
    const classIsLowCost = className(isLowCost(value));
    const classIsHighCost = className(isHighCost(value));
    const classIsOther = className(isOther(value));

    const states = stateByNumber(value);

    return (
      <form className="pa4 black-80">
        <div className="">
          <label className="f6 b db mb2">
            Phone <span className="normal black-60">(mandatory)</span>
          </label>
          <input
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            placeholder="XXX XX XX XX"
            value={value}
            onChange={this.handleChange}
            maxlength="9"
          />
          <small className="f6 black-60 db mb2">Only Spanish phone numbers are allowed.</small>
        </div>
        <ul className="list pl0 ml0 ba b--light-silver br2">
          <li className={`ph3 pv3 bb b--light-silver ${classIsFixed}`}>Fixed</li>
          <li className={`ph3 pv3 bb b--light-silver ${classIsMobile}`}>Mobile</li>
          <li className={`ph3 pv3 bb b--light-silver ${classIsFreeClass}`}>Free call</li>
          <li className={`ph3 pv3 bb b--light-silver ${classIsLowCost}`}>Low cost</li>
          <li className={`ph3 pv3 bb b--light-silver ${classIsHighCost}`}>Hight cost</li>
          <li className={`ph3 pv3 bb b--light-silver ${classIsOther}`}>Other</li>
          <li className={`ph3 pv3 bb b--light-silver`}>States: {states.join(', ')}</li>
        </ul>
      </form>
    );
  }
}

export { App };
