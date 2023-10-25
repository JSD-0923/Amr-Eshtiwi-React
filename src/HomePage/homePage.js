import React from 'react'
import SearchContainer from '../searchContainer/searchContainer'
import TopicsCard from '../TopicsCards/topicCard'

function HomePage() {
    return (
        <>
            <SearchContainer />
            <TopicsCard></TopicsCard>
        </>
    )
}

export default HomePage