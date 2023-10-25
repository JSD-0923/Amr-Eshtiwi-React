import React from 'react'
import './TopicInfoCard.css'
import Btn from '../button/button'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function TopicInfoCard() {
    return (
        <div class="topic-card background-light">
            <div class="topic-card-image">
                <img src="../static/images/ajax.gif" width="100%" height="100%"/>
            </div>
            <div class="topic-card-content text-light">
                <span class="title-auther"><strong>HTML</strong> by <a href="#">Sarah Smith</a></span>
                <div class="add-favourties-container">
                    <p>Interested about this topic?</p>
                    <Btn name={'Add to Favourites'} icon={<FavoriteBorderOutlinedIcon/>}/>
                    {/* <button class="add-favourites-button">
                        <span>Add to Favourites </span>
                        <span class="facourites-icon"><ion-icon name="heart-outline"></ion-icon></span>
                    </button> */}
                    <p class="credits">Unlimited Credits</p>
                </div>
            </div>
        </div>
    )
}

export default TopicInfoCard