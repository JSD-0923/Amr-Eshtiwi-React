import React, { useEffect, useState } from 'react'
import TopicInfo from '../../Components/topicInfo/TopicInfo'
import SubTopics from '../../Components/SubTopics/SubTopics'
import { useParams } from 'react-router-dom';

function DetailsPage() {
    let { id } = useParams();
    const [topic, setTopic] = useState();

    useEffect(() => {
        console.log('test1');

        fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
            .then((result) => {
                console.log('test2');
                return result.json();
            })
            .then((topic) => {
                console.log(topic);
                setTopic(topic);
            });

    }, [id]);
    return (
        <>
            {topic ?
                <>
                    <TopicInfo topic={topic} />
                    <SubTopics topic={topic} />
                </>
                : <></>
            }
        </>
    )
}

export default DetailsPage