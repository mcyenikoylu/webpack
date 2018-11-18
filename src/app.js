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
    render(){
        console.log("render called");
        return <div style={{ padding: '50px', width: '100%'}}>
            {this.props.children}
            <button onClick={
                (event)=>{
                    this.setState({
                        counter: this.state.counter +1
                    })
                 
                }
            }>update</button>
        </div>
    }
}

App.PropTypes = {
    name : PropTypes.string.isRequired,
}