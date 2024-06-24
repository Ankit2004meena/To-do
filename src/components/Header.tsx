import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Header: React.FC = () => {
    return (
        <Container>
            <Toolbar>
               
                <Typography variant="h6">My To Do</Typography>
            </Toolbar>
        </Container>
    );
};

export default Header;

const Container = styled(AppBar)`
 background-image: linear-gradient(135deg, #69FF97 10%, #00E4FF 100%);
    position: static;
    animation: 1s ease-out 0s 1 slideInLeft;

    @keyframes slideInLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    img {
        width: 50px;
        margin-right: 10px;
    }

    p {
        background: #99F443;
        color: #00008B;
        font-size: 45px;
        font-weight: bold;
    }

    @media only screen and (max-width: 300px) {
        img {
            width: 25px;
            margin-right: 10px;
        }

        p {
            font-size: 20px;
            font-weight: bold;
        }
    }
`;
