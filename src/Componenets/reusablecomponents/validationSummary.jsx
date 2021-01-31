import React, { Component } from 'react';
class ValidationSummaryComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.messages === undefined || this.props.messages.length == 0) {
            return (<div>All Valid</div>)
        } else {
            console.log(`messages length ${this.props.messages.length}`);
            console.log(`messages:`, this.props.messages);

            return (
                <div>
                    {
                        this.props.messages.map((m, idx) => (
                            <strong key={idx}><br></br>{m}</strong>
                        ))
                    }
                </div>
            );
        }
    }
}

export default ValidationSummaryComponent;