import React from 'react'
import { styled} from '@mui/material/styles';
import { AppBar, Toolbar,Typography } from '@mui/material'
import { logo } from '../constants/constant'
export default function Header() {
    return (
        <>
            <Container style={{ background: '#99F443' ,position:"static",animation: "1s ease-out 0s 1 slideInLeft"}}>
                <Toolbar>
                    <img src={logo} alt="logo" style={{ width: 50 ,marginRight:10}} />
                    <Typography style={{ background:'#99F443' ,color: '#00008B' ,fontSize:'30px' ,fontWeight: 'bold' }}>My_Notes</Typography>
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
  }`;
