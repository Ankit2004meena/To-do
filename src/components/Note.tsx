import React from 'react'
import { NoteObject } from '../models/note'
import { Card, CardContent, Box, Typography, Button, styled } from '@mui/material'

interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    return (
        <CardStyle style={{ background: `${note.color}` }}>
            <CardContent>
                <Wrapper>
                    <Typography variant='h5' style={{ fontWeight: 'bold', textDecorationStyle: "double", textDecorationLine: "underline" }}>{note.title}</Typography>
                    <Typography variant="body1">{note.description}</Typography>
                    <Typography style={{ fontWeight: 'bold' }}>{note.date}</Typography>
                    <Button variant="outlined" onClick={() => deleteNote(note.id)}>Delete Note</Button>
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
    background-color:white;
    color:black;
    margin-top:5px;
    cursor:pointer;
`;

