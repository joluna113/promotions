import React from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Slider, Typography} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {DateCalendar} from "@mui/x-date-pickers";

function Sidebar(props) {
    return (
        <Box flex={2} sx={{
            height:'90vh',
            justifyContent:'center',
            alignItems:'center',paddingTop:10,
        }} >
            <Box position='fixed'>


          <Box >
              <h3>Suggested</h3>
          </Box>

            </Box>
        </Box>
    );
}

export default Sidebar;