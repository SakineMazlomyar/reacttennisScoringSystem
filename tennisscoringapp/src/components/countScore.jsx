import React, { Component } from 'react';


export default class TennisScoring extends Component {
    state = {
        playerPoints: 1,
        playerScore : 0,
        playerCurrentMatch: 0,
        playerSet: 0,
        //Apponent
        apponentPoints: 1,
        apponentScore: 0,
        apponentCurrentMatch: 0,
        apponentSet: 0,
    };

    constructor() {
        super();
        this.handlePlayer = this.handlePlayer.bind(this)
        this.handleApponent = this.handleApponent.bind(this)
    }
    handlePlayer() {
        this.setState({playerPoints: this.state.playerPoints+1})
        let {playerPoints} = this.state
        if(playerPoints === 1){
            this.setState({playerScore: 15})

        }else if(playerPoints === 2) {
            
            this.setState({playerScore: 30})
            
        }else if(playerPoints === 3) {
            
            this.setState({playerScore: 40})
            
        }else {
            this.setState({playerPoints:1})
            this.setState({playerScore: 0})
            this.setState({apponentScore: 0})
            this.setState({apponentPoints:1})
            this.setState({playerCurrentMatch: this.state.playerCurrentMatch+1})
        }
        
        
        
    }

    handleApponent() {
        this.setState({apponentPoints: this.state.apponentPoints+1})
        let {apponentPoints} = this.state
        if(apponentPoints === 1){
            this.setState({apponentScore: 15})

        }else if(apponentPoints === 2) {
            
            this.setState({apponentScore: 30})
            
        }else if(apponentPoints === 3) {
            
            this.setState({apponentScore: 40})
            
        }else {
            this.setState({apponentPoints:1})
            this.setState({apponentScore: 0})
            this.setState({playerScore: 0})
            this.setState({playerPoints:1})
            this.setState({apponentCurrentMatch: this.state.apponentCurrentMatch+1})
        }
        

    }

    render() { 
        return (
        
        <div className="d-flex flex-row justify-content-center text-white bg-secondary">
            <div className="p-2">
            <h5>Player Set: {this.countPlayerSet()}</h5>
             <h5>Player Match Score: {this.state.playerCurrentMatch}</h5>

            <span>{this.state.playerScore}</span>
            <button onClick={this.handlePlayer} className="btn btn-dark">
             Player
            </button>

            </div>
            <div className="p-2">
            <h5>Apponent Set: {this.countApponentSet()}</h5>
            <h5>Apponent Match Score: {this.state.apponentCurrentMatch}</h5>
            <span>{this.state.apponentScore}</span>
            <button onClick={this.handleApponent} 
            
            className="btn btn-dark">
            Apponent
            </button>
            </div>
        
        </div>);
    }
    countPlayerSet() {
        let {playerCurrentMatch} = this.state
        let {playerSet} = this.state
    
        if(playerCurrentMatch === 12){
            playerSet = 2
            alert("Player won, we rest the match")
            window.location.reload()
        
        }
        return playerSet;
        
    }
    countApponentSet() {
        let {apponentCurrentMatch} = this.state
        let {apponentSet} = this.state
    
        if(apponentCurrentMatch === 12){
            apponentSet = 2
            alert("Apponent won, we rest the match")
            window.location.reload()
        
        }
        return apponentSet;
    }
}