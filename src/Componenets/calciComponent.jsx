import { render } from '@testing-library/react';
import React, {Component} from 'react'
import "./calcss.css"

class CalciComponent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            screen: '' };
    };

handleInput=(evt)=>{
    this.setState({screen: this.state.screen});
}

render(){
    return(
        <div class="container">
            <input type="text" name="screen" id="screen"
            value={this.state.screen} onChange={this.handleInput.bind(this)}/>
            <div class="calculator">
            <table>
                <tr>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>C</button></td>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>+/-</button></td>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>/</button></td>
                </tr>
                <tr>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>+</button></td>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>-</button></td>
                    <td><button class="operator" onClick={this.handleInput.bind(this)}>*</button></td>
                </tr>
                <tr>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>7</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>8</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>9</button></td>
                </tr>
                <tr>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>4</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>5</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>6</button></td>
                </tr>
                <tr>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>1</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>2</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>3</button></td>
                    
                </tr>
                <tr> 
                    <td><button class="number" onClick={this.handleInput.bind(this)}>0</button></td>
                    <td><button class="number" onClick={this.handleInput.bind(this)}>.</button></td>
                    <td><button class="operator" id='' onClick={this.handleInput.bind(this)}>=</button></td>
                </tr>  
            </table>
            </div>
    </div>
    );
}
}
export default CalciComponent;