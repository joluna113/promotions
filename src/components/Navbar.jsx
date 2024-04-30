import React from 'react';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Icon,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import {Mail, MailOutline, Notifications, NotificationsOutlined, Search} from "@mui/icons-material";



const Search_bar = styled('div')(({}) => ({
    backgroundColor: 'white',
    width:'100%',
    borderRadius:'10px',
    alignItems:'center',
    color:'black',
    // borderColor:'black',
    // borderStyle:'ridge',
    // borderWidth:'1px',


}))

function Navbar(props) {
    return (
        <AppBar position='fixed' sx={{backgroundColor:'white', color:'black', paddingY:2, borderBottom:' 10px', borderStyle:'ridge',
            borderWidth:'1px',
            marginX:0}}>
            <Toolbar disableGutters sx={{marginX:'20vw', display:'flex', justifyContent: 'space-between', }} >
                <Typography sx={{
                    color:'red',
                    fontSize:'1.8rem',
                    fontWeight:'bold',
                    fontFamily:'Nunito Sams'


                }} variant='p'>Ambience</Typography>
                <Box sx={{display:'flex', flexDirection:'row' , width:'45%',}}>
                    <Search_bar ><InputBase>Search..</InputBase> </Search_bar>
                    <IconButton sx={{padding:2, backgroundColor:"red",  color:'white',

                    }} aria-label="delete" size="small">
                        <Search fontSize="small" />
                    </IconButton>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography  variant='p' fontWeight='bold' marginX={1.5}>
                        Advertise
                    </Typography>

                        <Badge badgeContent={2}   color='error' sx={{marginX:1.5}}>
                            <MailOutline  sx={{fontSize:'29px' }} ></MailOutline>
                        </Badge>
                        <Badge  sx={{marginX:1.5}} badgeContent={10} color='error'>
                            <NotificationsOutlined  sx={{fontSize:'32px'}} ></NotificationsOutlined>
                        </Badge>

                        <Avatar  sx={{height:50, width:50, marginX:1}} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F255373%2Fuser-avatar-1&psig=AOvVaw03nwahoONaLiSm2DrgDAGr&ust=1714203540006000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMixx_qv34UDFQAAAAAdAAAAABAX'></Avatar>

                </Box>



            </Toolbar>
        </AppBar>
    );
}

export default Navbar;