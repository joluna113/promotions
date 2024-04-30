import React from 'react';
import {Box} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateCalendar} from "@mui/x-date-pickers";

function RightSide(props) {
    return (
        <Box flex={2} sx={{
            height:'90vh',
            paddingTop: 12


        }}>
            <Box position='fixed'>



                <Box display='flex' flexDirection='column' justifyContent='center'>
                    <h3>Advance Filter</h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DateCalendar/>
                    </LocalizationProvider>
                </Box>

            </Box>

            </Box>
    );
}

export default RightSide;