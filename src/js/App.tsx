import * as React from 'react';
import {
  isFixed,
  isFreeCall,
  isHighCost,
  isLowCost,
  isMobile,
  isOther,
  statesByNumber
} from 'spain-phone';
import { Check } from './Check';

const onlyNumbers = v => (v.match(/\d+/gi) || []).pop() || '';

class App extends React.Component {
  state = {
    value: ''
  };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value: string = onlyNumbers(event.target.value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const isFixedVal = isFixed(value);
    const isMobileVal = isMobile(value);
    const isFreeCallVal = isFreeCall(value);
    const isLowCostVal = isLowCost(value);
    const isHighCostVal = isHighCost(value);
    const isOtherVal = isOther(value);

    const states = statesByNumber(value).join(' or ');

    return (
      <form className="black-80">
        <div>
          <input
            className="input-reset f2 f1-ns ba b--black-10 pa2 mb2 db w-100"
            type="text"
            placeholder="XXXXXXXXX"
            value={value}
            onChange={this.handleChange}
            maxLength="9"
          />
        </div>
        <div className="f5 black-30 mv4">
          Examples: 920211264, 915913856, 901365024, 934587860, 950236855, 956511933
        </div>
        <div className="f2 f4 mv4">
          Probably located in{' '}
          <span className={states ? '' : 'black-20'}>{states || '(waiting for input)'}</span>
        </div>
        <div className="flex flex-wrap mv4 bb b--black-20 pb4">
          <div className="w-100 w-50-ns">
            <Check label="Fixed" check={isFixedVal} />
            <Check label="Mobile" check={isMobileVal} />
            <Check label="Other" check={isOtherVal} />
          </div>
          <div className="w-100 w-50-ns">
            <Check label="Free call" check={isFreeCallVal} />
            <Check label="Low Cost" check={isLowCostVal} />
            <Check label="High cost" check={isHighCostVal} />
          </div>
        </div>
      </form>
    );
  }
}

export { App };
