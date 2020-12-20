import React, { Component } from 'react'
import LineChart from './LineChart';
import Notepad from './Notepad';
import Statistics from './Statistics';

export default class Home extends Component {
    render() {
        return (
            <div class="main">
                <form id="form">
                    <input id="search-box" type="text" placeholder="Search"/>
                </form>
                <div className="row-1"><LineChart /></div>
                <div className="row-2">
                    <Notepad />
                    <div className="col-5">
                        <Statistics />
                        <Statistics />
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
