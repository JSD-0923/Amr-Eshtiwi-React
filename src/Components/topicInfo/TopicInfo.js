import { Box, Rating } from '@mui/material'
import React from 'react'
import './TopicInfo.css'
import TopicInfoCard from '../TopicInfoCard/TopicInfoCard'

function TopicInfo({topic}) {
    return (
        <div className="topic-data">
            <div className="topic-data-values">
                <h1>{topic.category}</h1>
                <h2>{topic.topic}</h2>

                <Box>
                    <Rating name="half-rating-read" value={topic.rating} defaultValue={3.5} precision={0.5} readOnly sx={{ marginBlock: 2 }} />
                </Box>
                <p>{topic.description}</p>
            </div>

            <TopicInfoCard topic={topic}/>
        </div>
    )
}

export default TopicInfo