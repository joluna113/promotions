import React from 'react';
import {Box, Button, Container, FormControl, OutlinedInput, Stack, TextField, Typography} from "@mui/material";


function Login(props) {
    return (
        <Box  display='flex' height='100vh'   >
            
            <Box flex={6}>
                <img width={'100%'}  height={'100%'} src="https://images.unsplash.com/photo-1614213856434-df2a5fa9ddc3?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </Box>
            <Box flex={6} alignContent='center'    alignItems='center'>
                <Typography sx={{display:'flex', fontFamily:'Nunito Sans', fontSize:'2.5rem', fontWeight:700, justifyContent:'center'}}> Login</Typography>
                <Stack spacing={2} marginBottom={3} justifyContent='center' justifyItems='center' alignItems='center'>
                    <form noValidate autoComplete="off">
                        <FormControl sx={{width: '30vw'}}>
                            <OutlinedInput placeholder="Please enter text"/>

                        </FormControl>
                    </form>
                    <form noValidate autoComplete="off">
                        <FormControl sx={{width: '30vw'}}>
                            <OutlinedInput placeholder="Please enter text"/>

                        </FormControl>
                    </form>
                    <Button sx={{width:'30vw'}} variant="contained">Lets go</Button>

                </Stack>
                <Stack spacing={2} direction='row' justifyContent='center'>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>

                </Stack>
            </Box>
           

        </Box>
    );
}

export default Login;