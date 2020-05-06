import React from 'react'
import Display from '../components/display/display.component'
import Button from '../components/button/button.component'
import './calc.styles.scss'
require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.display.numericDisplay.js");
require("../lib/swisscalc.display.memoryDisplay.js");
require("../lib/swisscalc.calc.calculator.js");

const s1 = '\u00B1'
const s2 = '\u00F7'
const s3 = '\u00D7'
const s4 = '\u00AB'


export default class Calc extends React.Component {
  state = { display: "0"}

  oc = global.swisscalc.lib.operatorCache;
  calc = new global.swisscalc.calc.calculator()
  
  onDigitPress = e => {
    const id = e.target.value
    if (this.state.display.length > 13) {return}

    switch (id){
      case '+': {this.onBinaryOperatorPress(this.oc.AdditionOperator)
                  break}
      case '-': {this.onBinaryOperatorPress(this.oc.SubtractionOperator)
                  break}
      case '÷': {this.onBinaryOperatorPress(this.oc.DivisionOperator)
                  break}
      case '×': {this.onBinaryOperatorPress(this.oc.MultiplicationOperator)
                  break}
      default: {    
        this.calc.addDigit(e.target.value);
        this.setState({ display: this.calc.getMainDisplay() })
      }
    }    
  }

  onUnaryOperatorPress = () => {
    this.calc.addUnaryOperator(this.oc.PercentOperator);
    this.setState({ display: this.calc.getMainDisplay() });
  }

  onBinaryOperatorPress = (operator) => {
    this.calc.addBinaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
  }

  onEqualsPress = () => {
    this.calc.equalsPressed();
    this.setState({ display: this.calc.getMainDisplay() });
  }

  onClearPress = () => {
    this.calc.clear();
    this.setState({ display: this.calc.getMainDisplay() });
  }

  onPlusMinusPress = () => {
    this.calc.negate();
    this.setState({ display: this.calc.getMainDisplay() });
  }

  onBackspacePress = () => {
    this.calc.backspace();
    this.setState({ display: this.calc.getMainDisplay() });
  }

  render(){
    return (
      <div className='main'>
        <div className="calc">
          <div style={{padding: '20px 0'}}>
            <Display text={this.state.display} />
          </div>
          
          <div className="knobs">
            <Button onClickHandler={this.onClearPress} value="C" />
            <Button onClickHandler={this.onUnaryOperatorPress} value="%"/>
            <Button onClickHandler={this.onPlusMinusPress} value={s1} /> 
            <Button onClickHandler={this.onDigitPress} value={s2}/>
            <Button onClickHandler={this.onDigitPress} value="7" />
            <Button onClickHandler={this.onDigitPress} value="8" />
            <Button onClickHandler={this.onDigitPress} value="9" />
            <Button onClickHandler={this.onDigitPress} value={s3}/>
            <Button onClickHandler={this.onDigitPress} value="4" />
            <Button onClickHandler={this.onDigitPress} value="5" />
            <Button onClickHandler={this.onDigitPress} value="6" />
            <Button onClickHandler={this.onDigitPress} value="-" />
            <Button onClickHandler={this.onDigitPress} value="1" />
            <Button onClickHandler={this.onDigitPress} value="2" />
            <Button onClickHandler={this.onDigitPress} value="3" />
            <Button onClickHandler={this.onDigitPress} value="+" />
            <Button onClickHandler={this.onDigitPress} value="0" />
            <Button onClickHandler={this.onDigitPress} value="." />
            <Button onClickHandler={this.onBackspacePress} value={s4} />
            <Button onClickHandler={this.onEqualsPress} value="=" />
          </div>
        </div>
      </div>
    )
  }
}

