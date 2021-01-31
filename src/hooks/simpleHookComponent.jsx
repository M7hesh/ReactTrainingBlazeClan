import React, {Component} from 'react';

function MyComponent(props){
    const value = "The Data from MyComponent";
    function display(){
        alert('Clicked');
    }

    return (
        <div className="container">
           <h2>The First Functional Component</h2>
           <strong>{props.msg}</strong>
           <br/>
           <input type="button" onClick={display} value="click"/>
           <br/>
           <RefComponent></RefComponent>
           <br/>
           <ExpressionComponent info={value}></ExpressionComponent>
           <br/>
           <ExpressionComponentNoReturn info={value}></ExpressionComponentNoReturn>
        </div>
    );
}

// Function Expression as Component that returns HTML

const ExpressionComponent=(props)=>{

    const display=()=>{
        alert('I am Expression Component returning HTML');
    }

    return (
        <div>
            <h3>The Expression Component</h3>
            <strong>{props.info}</strong>
            <input type="button" value="Click Me" onClick={display}/>
        </div>
    );
}

// Function Expression Component that does not return HTML
const ExpressionComponentNoReturn=(props)=>(   
    <div className="container">
      <h5>The Expression Component With No Return</h5>
      <hr/>
        <strong>{props.info}</strong>
      <hr/>

      <input type="button" value="CLick Me" 
       onClick={()=> {alert('click')}}/>
    </div>
);




// UnControlled Component
class RefComponent extends Component {

    add(){
        let res = parseInt(this.refs.txt1.value) + parseInt(this.refs.txt2.value);
        alert(`Res = ${res}`);
    }

    render(){
        return (
           <div>
            <input type="text" className="form-control" ref="txt1"/>
            <br/>
            <input type="text" className="form-control" ref="txt2"/>
            <br/>
            <input type="button" onClick={this.add.bind(this)} value="click"/>
           </div>
        )
    }
}



export default MyComponent;