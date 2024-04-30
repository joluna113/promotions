import React from 'react';
import Navbar from "./Navbar";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Icon,
    Stack,
    Typography
} from "@mui/material";
import {Add, IosShare, Share, Star} from "@mui/icons-material";

function EventInfo(props) {
    return (
        <Box>
            <Navbar></Navbar>
                <Box sx={{width: '100%', backgroundColor:'#F6F7F8'}}>



                <Stack  sx={{
                    paddingTop: '16vh', // Top padding
                    paddingX:'20vw',

                }} display='flex' flexDirection='row'>
                    <Box flex={8}>
                        <Typography  variant='p' sx={{fontFamily:'Nunito Sans', fontWeight:800,
                            fontSize:'2.5rem', marginBottom:5, display:'block'
                        }}> NBF Technology Academy</Typography>


                        <img  sx={{display:'block' , borderRadius:'30px'}} width={'100%'}
                             src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg"
                             alt=""/>

                        {/*<Typography variant='p' sx={{display:'block', marginY:3 , fontWeight:'bold', fontSize:'1.5rem'}}> Details</Typography>*/}
                        {/*<Stack direction='row' spacing={1} >*/}
                        {/*    <Chip sx={{backgroundColor: '#00798A'}} label="primary" color="primary" />*/}
                        {/*    <Chip sx={{backgroundColor: '#00798A'}} label="primary" color="primary" />*/}

                        {/*    <Chip sx={{backgroundColor: '#00798A'}} label="primary" color="primary" />*/}
                        {/*    <Chip sx={{backgroundColor: '#00798A'}} label="primary" color="primary" />*/}
                        {/*    <Chip sx={{backgroundColor: '#00798A'}} label="primary" color="primary" />*/}

                        {/*</Stack>*/}

                        <Typography  variant='p' sx={{fontFamily:'Lora ' , display:'block', marginTop:5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum.</Typography>


                        <Box >
                            {/*<Box>*/}
                            {/*    <h2>Reviews</h2>*/}
                            {/*    <Stack sx={{backgroundColor:'white'}} direction='row' spacing={3}>*/}
                            {/*        <Card>*/}
                            {/*            <CardContent >*/}
                            {/*                <Box display='flex' direction='row'>*/}
                            {/*                    <Avatar></Avatar>*/}
                            {/*                    <Box display='flex' flexDirection='column'>*/}
                            {/*                        <p>Username</p>*/}
                            {/*                        <Stack direction='row'>*/}

                            {/*                            <Icon><Star></Star></Icon>*/}
                            {/*                            <Icon><Star></Star></Icon>*/}
                            {/*                            <Icon><Star></Star></Icon>*/}
                            {/*                            <Icon><Star></Star></Icon>*/}
                            {/*                            <Icon><Star></Star></Icon>*/}
                            {/*                        </Stack>*/}
                            {/*                    </Box>*/}
                            {/*                </Box>*/}
                            {/*                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>*/}

                            {/*            </CardContent>*/}
                            {/*        </Card>*/}
                            {/*    </Stack>*/}

                            {/*</Box>*/}

                        </Box>
                    </Box>



                    <Box flex={4} marginLeft={6} >
                    <Typography variant='p' sx={{fontSize: '1.5rem', display:'block', marginBottom:2, fontWeight:'bold'}} >Details</Typography>

                    <Card  elevation={0}>
                        <CardContent>
                            <Typography variant='p' sx={{fontWeight:500 , display:'block', marginBottom:2}}>Hosted by:</Typography>
                            <Box display='flex' flexDirection='row'  justifyItems='center' alignItems='center'>
                                <Avatar
                                    sx={{marginRight:1}}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQURuBCyshJsdYqTWTULNYB-J3MOtZXiYd5SwCqRaImFBaSqSTmGj_idP3estOycpjmM&usqp=CAU"
                                >
                                </Avatar>
                                <p>El Burrito Loco</p>
                            </Box>
                            <Box>
                                <h3>Daye</h3>
                                <p>
                                    Momday, march 4th
                                </p>
                                <p>
                                    10Pm- 5pm
                                </p>
                                <p>
                                    Location: 2324 portage bay East
                                </p>
                                <p>SAcramento Caleifpo </p>
                                <img width={'100%'}
                                     src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
                                     alt=""/>
                                <Button variant='filed' fullWidth>
                                    Meesage Contact
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                    <Box>
                        <h2>Futute Events</h2>
                        <Stack direction='column' spacing={2}>
                            <Card elevation={0} >
                                <CardContent  sx={{display:'flex' ,  flexDirection:'row' }}>
                                    <img width={'20%'}
                                         src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
                                         alt=""/>
                                    <p>New Event</p>
                                </CardContent>
                            </Card>
                            <Card >
                                <CardContent  sx={{display:'flex' ,  flexDirection:'row' }}>
                                    <img width={'20%'}
                                         src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
                                         alt=""/>
                                    <p>New Event</p>
                                </CardContent>
                            </Card>
                            <Card >
                                <CardContent  sx={{display:'flex' ,  flexDirection:'row' }}>
                                    <img width={'20%'}
                                         src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
                                         alt=""/>
                                    <p>New Event</p>
                                </CardContent>
                            </Card>
                        </Stack>

                    </Box>

                </Box>
                </Stack>

                </Box>

        </Box>

    );
}

export default EventInfo;