import React from 'react'
import { NoteObject } from '../models/note'
import { Card, CardContent, Box, Typography, Button, styled } from '@mui/material'

interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void,
    setEditingNote: (note: NoteObject) => void
}

const Note: React.FC<INoteProps> = ({ note, deleteNote, setEditingNote }) => {
    return (
        <CardStyle style={{ background: `${note.color}` }}>
            <CardContent>
                <Wrapper>
                    <Typography variant='h5' style={{ fontWeight: 'bold', textDecorationStyle: "double", textDecorationLine: "underline" }}>{note.title}</Typography>
                    <Typography variant="body1">{note.description}</Typography>
                    <Typography style={{ fontWeight: 'bold' }}>{note.date}</Typography>
                    <Button variant="outlined" onClick={() => deleteNote(note.id)}>Delete Note</Button>
                    <Button variant="outlined" onClick={() => setEditingNote(note)}>Edit Note</Button>
                </Wrapper>
            </CardContent>
        </CardStyle>
    )
}

export default Note

const CardStyle = styled(Card)`
    width:300px;
    max-height:200px;
    margin:20px;
    border:2px solid black;
`;

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    &>button{
        border:2px solid #000;
       background-image: linear-gradient(135deg, #69FF97 10%, #00E4FF 100%);
        color:black;
        margin-top:5px;
        cursor:pointer;
    }
`;
