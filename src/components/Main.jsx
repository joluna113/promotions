import React from 'react';
import {Box, Button, Chip, Typography} from "@mui/material";
import CardExample from "./examples/CardExample";

const Main = () => {
    return (
        <Box flex={6} sx={{
            paddingTop:10,
            height: '90vh',

        }}>
            <Typography variant='p' sx={{ fontSize:'2.5rem', fontWeight:700, fontFamily:'Nunito Sams'}}>Current Promotions</Typography>
            <Box display='flex' sx={{marginY:4}}>
                <Chip label="Today" sx={{padding:2, marginRight:2 }} />
                <Chip label="This Week" sx={{padding:2,  marginRight:2 }} />
                <Chip label="Next Week" sx={{padding:2,  marginRight:2 }} />
                <Chip label="Distance" sx={{padding:2,  marginRight:2 }} />
                <Chip label="Type" sx={{padding:2,  marginRight:2 }} />
            </Box>


            <CardExample/>

            <CardExample/>

            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
        </Box>
    );
};

export default Main;