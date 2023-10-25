import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './SubTopics.css'

function SubTopics() {
    return (
        <div class="sub-topic-container">
            <div class="sub-topics background-light">
                <h1 class="text-light">HTML Sub Topics</h1>
                <div class="sub-topic"><CheckCircleOutlineOutlinedIcon/>
                    <p class="sub-topic-title text-light">HTML syntax and structure</p>
                </div>
                <div class="sub-topic"><CheckCircleOutlineOutlinedIcon/>
                    <p class="sub-topic-title text-light">HTML element and attribute</p>
                </div>
                <div class="sub-topic"><CheckCircleOutlineOutlinedIcon/>
                    <p class="sub-topic-title text-light">HTML forms and input elements</p>
                </div>
                <div class="sub-topic"><CheckCircleOutlineOutlinedIcon/>
                    <p class="sub-topic-title text-light">HTML multimedia elements (audio,video,images)</p>
                </div>
                <div class="sub-topic"><CheckCircleOutlineOutlinedIcon/>
                    <p class="sub-topic-title text-light">HTML accessability and semantic markup</p>
                </div>
            </div>
        </div>
    )
}

export default SubTopics