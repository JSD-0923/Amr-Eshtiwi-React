import React, { useEffect, useState } from 'react'
import SearchContainer from '../../Components/searchContainer/searchContainer'
import TopicsCard from '../../Components/TopicsCards/topicCard'

function HomePage() {
    const [topics, setTopics] = useState([]);
    const [allTopics , setAllTopics] = useState([]);
    const [url, setUrl] = useState('https://tap-web-1.herokuapp.com/topics/list')

    useEffect(() => {
        fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((topics) => {
            setTopics(topics);
            setAllTopics(topics);
        });

        
    },[url]);

    return (
        <>
            <SearchContainer setUrl={setUrl} topics={topics} setTopics={setTopics} allTopics={allTopics}/>
            {topics.length === 0 ? <span>There is no topics</span> : <TopicsCard topics={topics} ></TopicsCard> }
            
        </>
    )
}

export default HomePage