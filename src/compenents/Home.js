import React, { Component } from 'react'
import LineChart from './LineChart';
import Notepad from './Notepad';
export default class Home extends Component {
    render() {
        return (
            <div class="main">
                <form id="form">
                    <input id="search-box" type="text" placeholder="Search"/>
                </form>
                <LineChart />
                <Notepad />
                <Notepad />
                <Notepad />
            </div>
        )
    }
}
