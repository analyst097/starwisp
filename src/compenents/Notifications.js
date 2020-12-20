import React, { Component } from 'react'

export default class Notifications extends Component {
    constructor(props){
        super(props);

        this.state = {
            notifications: [
                {id:1, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:2, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:3, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:4, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:5, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:6, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:7, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:8, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:1, user: 'Admin', message: 'Faculty updated syllabus'},
            ],
            events:[
                {id:1, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:2, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:3, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:4, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:5, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:6, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:7, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:8, user: 'Faculty', message: 'Faculty updated syllabus'},
                {id:1, user: 'Faculty', message: 'Faculty updated syllabus'},
            ]
        }
    }

    handleTab = e =>{
        if(e.target.id == '1'){
            document.getElementById('events-tab').style.display = "none";
            document.getElementById('notif-tab').style.display = "block";
        }
        else{
            document.getElementById('notif-tab').style.display = "none";
            document.getElementById('events-tab').style.display = "block";

        }
    }

    render() {
        const notifs = this.state.notifications.map(notif=>(
            <div className="card" key={notif.id}>
                <div className="card-img" ><img src="" alt="User" /></div>
                <div className="card-text">
                    <div>{notif.user}</div>
                    <p>{notif.message}</p>
                </div>
            </div>
        ))
        const events = this.state.notifications.map(event=>(
            <div className="card" key={event.id}>
                <div className="card-img"><img src="./avatar2.svg" alt="User" /></div>
                <div className="card-text">
                    <div>{event.user}</div>
                    <p>{event.message}</p>
                </div>
            </div>
        ))

        return (
            <div className="notifs">
                <div className="tab">
                    <button id='1' className="tab-item" onClick={this.handleTab}>Notifications</button>
                    <button id='2' className="tab-item" onClick={this.handleTab}>Events</button>
                </div>
                <div id="notif-tab">
                    {notifs}
                </div>
                <div id="events-tab">
                    {events}
                </div>
            </div>
        )
    }
}
