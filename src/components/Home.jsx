import React from 'react';
import {Box, Container, IconButton, Stack} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import RightSide from "./RightSide";

function Home(props) {
    return (
        <Box>
            <Navbar></Navbar>
            <Box sx={{
                width: '100vw',

            }}>
                <Stack  sx={{
                    paddingTop: '5vh', // Top padding
                    paddingLeft: '20vw', // Left padding
                    paddingRight: '20vw',

                }}  direction='row' spacing={5} justifyContent='space-evenly'>
                    <Sidebar></Sidebar>
                    <Main></Main>
                    <RightSide></RightSide>

                </Stack>
            </Box>

        </Box>
    );
}

export default Home;