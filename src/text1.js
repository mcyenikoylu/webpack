import React from 'react';
import Proptypes from 'prop-types';

export class text1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label1 : "Kullanıcı Adı: ",//<label id="label1" title="Kullanıcı Adı: "></label>,
            text1 : <input id="text1"></input>
        }
    }

    render(){
        return <div>{this.state.label1}</div>
    }
}