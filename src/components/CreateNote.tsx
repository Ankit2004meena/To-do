import React, { useState, useEffect } from 'react';
import { NoteObject } from '../models/note';
import { InputBase, Box, Button, styled, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { TITLE_LIMIT, DESCRIPTION_LIMIT } from '../constants/constant';

const initialObject: NoteObject = {
    id: 0,
    title: '',
    description: '',
    color: '#F6BE00',
    date: new Date().toLocaleString(),
};

interface ICreateNoteProps {
    addNotes: (note: NoteObject) => void,
    editingNote: NoteObject | null,
    updateNote: (note: NoteObject) => void
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes, editingNote, updateNote }) => {
    const [note, setNote] = useState<NoteObject>(initialObject);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (editingNote) {
            setNote(editingNote);
        } else {
            setNote(initialObject);
        }
    }, [editingNote]);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) {
            setError('');
        }
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const onCreateNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!note.title || !note.description) {
            setError('All fields are mandatory');
            return;
        }

        if (editingNote) {
            updateNote(note);
        } else {
            addNotes({ ...note, id: uuid() });
        }

        setNote(initialObject);
    };

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
                placeholder='Choose Color'
                onChange={(e) => onValueChange(e)}
                name="color"
                value={note.color}
               
            />
            <Button variant="outlined" onClick={(e) => onCreateNote(e)}>
                {editingNote ? 'Update' : 'Create'}
            </Button>
            {error && <Errorbox>{error}</Errorbox>}
        </Container>
    );
};

export default CreateNote;

const Container = styled(Box)`
    &>*{
        margin:20px;
        height:2rem;
        
    }
    &>div>input[type="text"]{
        background-image: linear-gradient(225deg, #69FF97 10%, #00E4FF 100%);
        border-bottom:1px solid #111111;
        opacity:0.5;
        width:430px;
        
    }
    &>div>input[type="color"]{
    padding-top: 15px;
    height:50px;
        width:50px;
       
    }
    &>button{
        border:2px solid #000;
         background-image: linear-gradient(225deg, #69FF97 10%, #00E4FF 100%);
        margin-top:1rem;
    }
    &>span{
        font-size:10;
        position:relative;
        right:80px;
        
    }
    @media only screen and (max-width: 590px) {
        &>div>input[type="text"]{
            width:200px;
        }
        &>span{
            font-size:10;
            position:relative;
            right:70px;
        }
    }
    @media only screen and (max-width: 300px) {
        &>div>input[type="text"]{
            width:100px;
        }
        &>span{
            font-size:10;
            position:relative;
            right:10px;
        }
    }
`;

const Errorbox = styled(Typography)`
    background:red;
    color:yellow;
    padding:10px;
    width:20%;
    font-size:medium;
`;
