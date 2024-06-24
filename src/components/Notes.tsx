import React from 'react'
import { Box, Typography } from '@mui/material'
import { NoteObject } from '../models/note'
import Note from './Note'

interface INotesProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void,
    setEditingNote: (note: NoteObject) => void
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNote, setEditingNote }) => {
    return (
        <Box>
            <Typography variant="h4" style={{ }}>Notes</Typography>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    notes.map(note => (
                        <Note
                            key={note.id}
                            note={note}
                            deleteNote={deleteNote}
                            setEditingNote={setEditingNote}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Notes
