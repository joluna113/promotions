import React from 'react';
import {Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {Bookmark, Share} from "@mui/icons-material";



function CardExample(props) {
    return (
        <Card onClick={() => {}}  elevation={0} sx={{ display: 'flex',  marginBottom:3, border:'0 solid'}}>
            <Box display={"flex"} alignItems='start'>


            <CardMedia
                component="img"
                sx={{ width: 250 }}
                image="https://imgv3.fotor.com/images/side/rap-album-cover.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Saturday, April 29 | 10:20 AM PDT
                    </Typography>
                    <Typography component="p" variant="h5">
                        Viva Pinata
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">

                    </Typography>


                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Sacramento, CA
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Food  | $17-25
                    </Typography>
                </CardContent>


            </Box>
            <CardActions disableSpacing sx={{justifyContent:'end'}}>
                <IconButton aria-label="add to favorites">
                    <Bookmark />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>

            </CardActions>
            </Box>
        </Card>
    );
}

export default CardExample;