import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import { Box } from '@mui/material';
import Notes from './components/Notes';
import { NoteObject } from './models/note';

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  const [editingNote, setEditingNote] = useState<NoteObject | null>(null);

  useEffect(() => {
    const savedNotes = sessionStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const updateNote = (updatedNote: NoteObject) => {
    const updatedNotes = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
    setEditingNote(null); // Reset editing state after update
  };

  return (
    <Box style={{ height: "100vh"}}>
      <Header />
      <Box style={{ padding: "10px"}}>
        <CreateNote addNotes={addNotes} editingNote={editingNote} updateNote={updateNote} />
        <hr />
        <Notes notes={notes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
      </Box>
    </Box>
  );
}

export default App;
