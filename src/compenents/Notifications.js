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
                {id:1, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:2, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:3, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:4, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:5, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:6, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:7, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:8, user: 'Admin', message: 'Faculty updated syllabus'},
                {id:1, user: 'Admin', message: 'Faculty updated syllabus'},
            ]
        }
    }

    render() {
        const notifs = this.state.notifications.map(notif=>(
            <div key={notif.id}>
                <div><img src="" alt="user"/></div>
                <div>
                    <div>{notif.user}</div>
                    <p>{notif.message}</p>
                </div>
            </div>
        ))
        const events = this.state.notifications.map(event=>(
            <div key={event.id}>
                <div><img src="" alt="user"/></div>
                <div>
                    <div>{event.user}</div>
                    <p>{event.message}</p>
                </div>
            </div>
        ))

        return (
            <div className="notifs">
                <button className="tab">Notifications</button>
                <button className="tab">Events</button>
                <div id="notif-tab">
                </div>
                <div id="events-tab"></div>
            </div>
        )
    }
}
