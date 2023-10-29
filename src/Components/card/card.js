import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CustomeCard({topic}) {
    let url = "/details/"+topic.id;
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 300, backgroundColor: theme.palette.default.main, color: theme.palette.text.main}}>
            <CardActionArea component={Link} to={url}>
                <CardMedia
                    component="img"
                    style={{ height: "180px", }}
                    image={require('../../static/images/'+topic.image)}
                    alt="ajax"
                />
                <CardContent>

                    <Typography gutterBottom variant="p">
                        {topic.topic}
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                        {topic.category}
                    </Typography>

                    <Box>
                        <Rating name="half-rating-read" value={topic.rating} defaultValue={3.5} precision={0.5} readOnly sx={{ marginBlock: 2 }} />
                    </Box>

                    <Typography variant="p">
                        Author: {topic.name}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomeCard