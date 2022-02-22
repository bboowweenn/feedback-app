import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {

    if(!feedback || feedback.length === 0) {
        return <p>No FeedBack</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete}/>
            ))}
            
        </div>
    )
}
FeedbackList.protoType = {
    feedback: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number,
        rating: PropTypes.number,
        text: PropTypes.string,
    })
    )
}
export default FeedbackList