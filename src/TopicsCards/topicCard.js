import React from 'react'
import CustomeCard from '../card/card'
import './topicCard.css'

function TopicsCard() {
    return (
        <div className='topics-card'>
            <CustomeCard id={1}/>
            <CustomeCard id={2}/>
            <CustomeCard id={3}/>
            <CustomeCard id={4}/>
            <CustomeCard id={5}/>
        </div>
    )
}

export default TopicsCard