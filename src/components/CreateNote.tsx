import React, { useState } from 'react'
import { NoteObject } from '../models/note';
import { InputBase, Box, Button, styled, Typography } from '@mui/material'
import { v4 as uuid } from 'uuid';
import { TITLE_LIMIT, DESCRIPTION_LIMIT } from '../constants/constant';
const initialObject = {
    id: 0,
    title: '',
    description: '',
    color: '#F6BE00',
    date: new Date().toLocaleString(),
}
interface IcreateNoteProps {
    addNotes: (note: NoteObject) => void
}
const CreateNote: React.FC<IcreateNoteProps> = ({ addNotes }) => {
    const [note, setNote] = useState<NoteObject>(initialObject);
    const [error, setError] = useState<string>('');


    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) {
            setError('');
        }
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    const onCreateNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!note.title || !note.description) {
            setError('All fields are mandatory');
            return;
        }
        addNotes({ ...note, id: uuid() })
        setNote(initialObject);
    }
    return (
        <Container>
            <InputBase
                placeholder='Title'
                onChange={(e) => onValueChange(e)}
                name="title"
                value={note.title}
                inputProps={{ maxLength: TITLE_LIMIT }}
            />
            <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
            <InputBase
                placeholder='Description'
                onChange={(e) => onValueChange(e)}
                name="description"
                value={note.description}
                inputProps={{ maxLength: DESCRIPTION_LIMIT }}
            />
            <Box component="span">{note.description.length}/{DESCRIPTION_LIMIT}</Box>
            <InputBase
                type="color"
                defaultValue={'#F6BE00'}
                placeholder='Choose Color'
                onChange={(e) => onValueChange(e)}
                name="color"
                value={note.color}
            />
            <Button variant="outlined"
                onClick={(e) => onCreateNote(e)}>Create
            </Button>
            {error && <Errorbox>{error}</Errorbox>}
        </Container>
    )
}
export default CreateNote;
const Container = styled(Box)`
&>*{
    margin:20px;
}
&>div>input[type="text"]{
    background-color:white;
    border-bottom:1px solid #111111;
    opacity:0.5;
    width:500px;
}
&>div>input[type="color"]{
    width:50px;
    height:50px;
    
}
&>button{
    border:2px solid #000;
    background-color:white;
}
&>span{
    font-size:10;
    position:relative;
    right:80px;
}
`;
const Errorbox = styled(Typography)`
background:red;
color:yellow;
padding:10px;
width:20%;
font-size:medium;
`;
