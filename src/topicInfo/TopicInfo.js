import { Box, Rating } from '@mui/material'
import React from 'react'
import './TopicInfo.css'

function TopicInfo() {
    return (
        <div class="topic-data">
            <div class="topic-data-values">
                <h1>Web Development Languages</h1>
                <h2>HTML</h2>

                <Box>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly sx={{ marginBlock: 2 }} />
                </Box>
                <p>HTML (HyperText Markup Languages) is the standard markup languages for creating web pages and other
                    information that can be displayed in a web browser. It provides a structure for content and defines
                    how it should be displayed on a web page, including text, images, and multimedia. HTML is essential
                    for creating static web pages and is a foundational technology for the World Wide Web.</p>
            </div>
        </div>
    )
}

export default TopicInfo