import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import "../style.css";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container addNoteContainer my-2 ">
            <form className="my-3 addNoteForm ">
                <h2>Add a Note</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control addNoteFormInput" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea cols="20" rows="3" type="text" className="form-control addNoteFormInput" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control addNoteFormInput" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            
        </div>
    )
}

export default AddNote
