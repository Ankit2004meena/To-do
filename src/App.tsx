import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import { Box } from '@mui/material';
import Notes from './components/Notes';
import { NoteObject } from './models/note';
function App() {
  const [notes, setNotes] = useState<NoteObject[]>([])
  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
    }
  }, [])
  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]));
  }

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(node => node.id != id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  }
  return (
    <Box fontStyle={{ height: "100vh", background: "#79A7D3" }}>
      <Header />
      <Box style={{ padding: "20px", background: "#79A7D3" }}>
        <CreateNote addNotes={addNotes} />
        <hr></hr>
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </Box>
  );
}

export default App;
