import React, { Component } from "react";
import CounterLayout from "../components/CounterLayout";

class CounterPageConteiner extends Component{
    constructor(props){
        super(props);
        this.state={
            countValue: 0,
            parityType: 'even',
            filling:{
                background:'white'
            }
        }
    };
    handleIncrement = () =>{
        this.setState({countValue: this.state.countValue +1});
        if(this.state.countValue % 2 === 0){
            this.state.parityType = 'odd';
            this.state.filling = {background :'red'}
        }else{
            this.state.parityType = 'even';
            this.state.filling = {background :'green'}

        };
    };
    handleDecrement = () =>{
        this.setState({countValue: Math.max(this.state.countValue - 1, 0)});
        if(this.state.countValue % 2 === 0) {
            this.state.parityType = 'odd';
            this.state.filling = {background :'red'}
        }else{
            this.state.parityType = 'even';
            this.state.filling = {background :'green'}
        };
    };
    handleReset = () =>{
        this.setState({countValue: this.state.countValue = 0 , parityType: this.state.parityType = 'even'});
        this.state.filling = {background :'white'}
    };

    render(){
        return (
        <CounterLayout 
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        filling={this.state.filling}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}/>
        )
    };
};
export default CounterPageConteiner;