import React from 'react'
import './TopicInfoCard.css'
import Btn from '../button/button'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useTheme } from '@mui/material';

function TopicInfoCard({topic}) {
    const theme = useTheme();

    return (
        <div className="topic-card" style={{backgroundColor: theme.palette.default.main , color: theme.palette.text.main}}>
            <div className="topic-card-image">
                <img src={require(`../../static/images/${topic.image}`)} alt={topic.topic} width="100%" height="100%"/>
            </div>
            <div className="topic-card-content text-light">
                <span className="title-auther"><strong>{topic.topic}</strong> by <a href="http://localhost:3000/">{topic.name}</a></span>
                <div className="add-favourties-container">
                    <p>Interested about this topic?</p>
                    <Btn name={'Add to Favourites'} icon={<FavoriteBorderOutlinedIcon/>} isFav={true}/>
                    <p className="credits">Unlimited Credits</p>
                </div>
            </div>
        </div>
    )
}

export default TopicInfoCard