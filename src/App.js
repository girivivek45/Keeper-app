import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Head from './Head';
import Note from './Note';
import Notes from './Notes'
import Hooks from './Hooks';
import Form from './Form';
import Todo from './Todo';
import Createarea from './Createarea';



function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Head/>
      <Hooks/>
      <Createarea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
      
      
    </div>
  );
}

export default App;
