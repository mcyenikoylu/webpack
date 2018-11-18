//import React from "react";
// export class App1 extends React.Component{
//     render(){
//         return <div>Hello { this.props.name }</div>
//     }
// }
// export default class App2 extends React.Component{
//     render(){
//         return <div>
//             <App1 name="app.js mcy" />
//             Last { this.props.name } {this.props.surname}</div>
//     }
// }

// import {kull} from "./text1.js";
// import {buttonapp} from "./button.js"
// export class App3 extends React.Component{
//     //<kull label1="app.js" />
//     //<button btnname="btn name">{this.props.btnname}</button>
//     render(){
//         return <div>
            
//             <button>app3 button</button>
            
            
//          </div>
//     }
// }

import React from "react";
import PropTypes from "prop-types";
import {NewComponent} from './newComponent.js';

export class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ahmet: 3,
            tolga: 2,
            counter: 0 
        }
        console.log("consturctor called");
    }
    componentWillMount(){
        console.log("componentWillMount called");
    }
    componentDidMount()
    {
        console.log("componentDidMount called");
    }
    componentWillUpdate(nextProps,nextState)
    {
        console.log("componentWillUpdate called");
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate called");

    }
    render(){
        console.log("render app called");
        return <div style={{ padding: '50px', width: '100%'}}>
            <div>{this.props.children}</div>
            <button onClick={
                (event)=>{
                    this.setState({
                        counter: this.state.counter +1
                    })
                 
                }
            }>update</button>
            <div>
                {/* <NewComponent count={this.state.counter}></NewComponent> */}
                {(this.state.counter<5 ? <NewComponent count={this.state.counter}></NewComponent> : null)}
            </div>
        </div>
    }
}

App.PropTypes = {
    name : PropTypes.string.isRequired,
}