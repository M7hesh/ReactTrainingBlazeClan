import React, { Component } from 'react';

class LfecycleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            val:0
        };
    }
    updateVal=(evt)=>{
        this.setState({val: parseInt(evt.target.value)});
    }
    render() { 
        if(this.state.val % 2 === 0){
            return(
                <div className="container">
                    <h2>The Parent Component</h2>
                    <input type="text" value={this.state.val}
                     onChange={this.updateVal.bind(this)}/>
                     <FirstChildComponent></FirstChildComponent>
                </div>
            )
        } else {
           return( <div className="container">
            <h2>The Parent Component</h2>
            <input type="text" value={this.state.val}
             onChange={this.updateVal.bind(this)}/>
             <SecondChildComponent data={this.state.val}></SecondChildComponent>
        </div>);
        }
    }

    componentDidMount=()=>{
        console.log('Component Did Mount on Parent');
    }
    componentDidUpdate=()=>{
        console.log('Component Did Update on Parent');
    }


}


class FirstChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:0,
            y:0
        };
    }
    getMouseXYPositions=(evt)=>{
        this.setState({x: evt.clientX});
        this.setState({y: evt.clientY});
        console.log(`Mouse Move x-${this.state.x} && y-${this.state.y}`);
    }

    componentDidMount=()=>{
        console.log('Component Did Mount on First Child');
        // attach a mouse move event
        window.addEventListener('mousemove', this.getMouseXYPositions);
    }
    componentDidUpdate=()=>{
        console.log('Component Did Update on First Child');
    }
    componentWillUnmount=()=>{
        console.log('Component Will UnMount on First Child');
        // unSunscribe the events
        window.removeEventListener('mousemove', this.getMouseXYPositions);
    }
    render() { 
        return (
            <div className="container">
                <h3>The First Child Component Showing Mouse Postions with StateChanges</h3>
                <strong>
                  x = {this.state.x} && y = {this.state.y}
                </strong>
            </div>
          );
    }
}
 
class SecondChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
                <h3>The Second Child Component Showing the Data Received from Parent (propChanges)</h3>
                <strong>Data received from Parent {this.props.data}</strong>
            </div>
        );
    }

    componentDidMount=()=>{
        console.log('Component Did Mount on Second Child');
        
    }
    componentDidUpdate=()=>{
        console.log('Component Did Update on Second Child');
    }
    componentWillUnmount=()=>{
        console.log('Component Will UnMount on Second Child');
    }
}
 
 

 


 
export default LfecycleParentComponent;