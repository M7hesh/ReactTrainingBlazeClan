import React, { Component } from 'react';


class GlobalErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage:''
        };
    }

    // listen the actual error message from then child and update the state of
    // state property of the current component
    // getDerivedStateFromError(error) will internally call setState() for the current component
    // based on the error message received from the child
    static getDerivedStateFromError(error){
        return {
            errorMessage:error.toString()
        };
    }
    


    // this method will be responsible
    // for handling errors occured in any of its child component
    componentDidCatch=(error, logInfo)=> {
        // log error
        console.log(error.toString(), logInfo.componentStack);
    }


    render(){
        if(this.state.errorMessage) {
            // return the fallback UI
            return(
                <div className="cotainer">
                    <h3>Something wen wrong in the current component we are looking into it</h3>
                    <strong>
                        {
                            this.state.errorMessage
                        }
                    </strong>
                </div>
            );
        }
        // oteherwise keep rendering the child components
        return this.props.children;
    }
}

class CounterValueComonent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counterValue:0
        };
    }
    increament=()=>{
        this.setState({counterValue: this.state.counterValue+1});
    }
    render() { 
         
        if(this.state.counterValue === 10) {
            throw new Error('I have reached to max counter value');
        }
        return ( 
            <div className="container">
              <strong>
                The Counter Value = {this.state.counterValue}
              </strong>
              <br/>
              <input type="button" value="Increament" onClick={this.increament.bind(this)}/>
            </div>
         );
         
        
    }
}
 class ContainerComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {  };
     }
     reloaad=()=>{
         // reloading the same page
         window.history.go(0);
     }
     render() { 
         return ( 
             <div className="container">
             <GlobalErrorBoundry>
               <CounterValueComonent></CounterValueComonent>
             </GlobalErrorBoundry>
               <hr/>
               <input type="button" value="Reload" onClick={this.reloaad.bind(this)}/>
             </div>
         );
     }
 }
  
 export default ContainerComponent;