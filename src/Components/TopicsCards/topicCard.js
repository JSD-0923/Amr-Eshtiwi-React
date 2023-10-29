import React from 'react'
import CustomeCard from '../card/card'
import './topicCard.css'

function TopicsCard({topics}) {
    return (
        <div className='topics-card'>
            {topics.length === 0 ?
                <span>There is no topics</span> : 
                topics.map((topic) => {
                    return <CustomeCard key={topic.id} topic={topic} />
                })
            }
        </div>
    )
}

export default TopicsCard