import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './SubTopics.css'
import { useTheme } from '@mui/material';

function SubTopics({ topic }) {
    const theme = useTheme();

    return (
        <div className="sub-topic-container" >
            <div className="sub-topics" style={{ backgroundColor: theme.palette.default.main, color: theme.palette.text.main }}>
                <h1 className="text-light">{topic.topic} Sub Topics</h1>
                {topic.subtopics?.map((subTopic) => {
                    return (
                        <div key={Math.random()} className="sub-topic"><CheckCircleOutlineOutlinedIcon sx={{ color: theme.palette.secondary.main }} />
                            <p className="sub-topic-title text-light">{subTopic}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SubTopics