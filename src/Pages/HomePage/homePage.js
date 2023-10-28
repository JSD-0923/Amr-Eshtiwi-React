import React from 'react'
import SearchContainer from '../../Components/searchContainer/searchContainer'
import TopicsCard from '../../Components/TopicsCards/topicCard'

function HomePage() {
    return (
        <>
            <SearchContainer />
            <TopicsCard></TopicsCard>
        </>
    )
}

export default HomePage