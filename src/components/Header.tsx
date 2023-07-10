import React from 'react'
import { styled} from '@mui/material/styles';
import { AppBar, Toolbar,Typography } from '@mui/material'
import { logo } from '../constants/constant'
export default function Header() {
    return (
        <>
            <Container style={{ background: '#99F443' ,position:"static",animation: "1s ease-out 0s 1 slideInLeft"}}>
                <Toolbar>
                    <img src={logo} alt="logo"  />
                    <Typography >My_Notes</Typography>
                </Toolbar>
            </Container>
        </>
    )
}
const Container=styled(AppBar)`
@keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  img{
    width:50px;
    margin-right:10px;
}
p{
    background:#99F443;
    color: #00008B ;
    font-size:45px ;
    fontWeight: bold ;
}
@media only screen and (max-width: 300px) {
    img{        
        width:25px;
        marginRight:10
    }
    p{
        font-size:20px;
        fontWeight: 'bold' ;
    }
}
  `;
