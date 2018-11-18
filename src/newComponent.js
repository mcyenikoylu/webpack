import React from "react";
import PropTypes from "prop-types";

export class NewComponent extends React.Component {
    componentWillReceiveProps(nextProps)
    {
        console.log("componentWillReceiveProps called: "+nextProps.count);
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        return (this.props.count != nextProps.count && nextProps.count <5 );
    }
    componentWillUnmount()
    {
        console.log("componentWillUnmount called: ");

    }
    render(){
        console.log("render NewComponent called");
        return <h1>{this.props.count}</h1>
    }
}