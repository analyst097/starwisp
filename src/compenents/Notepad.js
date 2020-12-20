import React, { Component } from 'react'

export default class Notepad extends Component {
    constructor(props){
        super(props);

        this.state = {
            notes:[
                {id: 1, title:'Title', desc: 'my first note' },
                {id: 2, title:'Title', desc: 'my second note' },
                {id: 3, title:'Title', desc: 'my third note' },
                {id: 4, title:'Title', desc: 'my fourth note' },
                {id: 5, title:'Title', desc: 'my fifth note' },
                {id: 6, title:'Title', desc: 'my sixth note' },
            ]
        }
    }
    render() {
        const notes = this.state.notes.map(note=>(
            <div className="note" key={note.id}>
                <span className="note-title"><strong>{note.title}</strong></span>
                <span className="note-desc">{note.desc}</span>
            </div>
        ))
        return (
            <div id="notes">
                <h3>Notepad</h3>
                {notes}
                <button>Add</button>
            </div>
        )
    }
}
