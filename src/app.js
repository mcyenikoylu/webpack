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
import PropTypes from "prop-types"
export class App extends React.Component {
    render(){
        
        return <div style={{ padding: '50px', width: '100%'}}>
            {this.props.children}
        </div>
    }
}

App.PropTypes = {
    name : PropTypes.string.isRequired,
}