
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    
    let average = feedback.reduce((acc, cur)=> {
        return acc + cur.rating
    }, 0)/feedback.length
    
    average = average.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className='feedback-stats' >
            <h4>Number of feedbacks: {feedback.length}</h4>
            <h4>Average is : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
} 
FeedbackStats.protoTypes = {
    feedback: PropTypes.array.isrequried
}

export default FeedbackStats