import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CustomeCard({id}) {
    let url = "/details/"+id;
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea component={Link} to={url}>
                <CardMedia
                    component="img"
                    style={{ height: "180px", }}
                    image={require('../static/images/css.webp')}
                    alt="ajax"
                />
                <CardContent>

                    <Typography gutterBottom variant="p">
                        Web Development Languages
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                        CSS
                    </Typography>

                    <Box>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly sx={{ marginBlock: 2 }} />
                    </Box>

                    <Typography variant="p">
                        Author: Sarah Smith
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomeCard