import React, { Fragment, useState } from 'react'

import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import Card from './components/Shared/Card'
import FeedbackStats from './components/FeedbackStats'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are u sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <Card reverse={true}>Try a shared component</Card>
      </div>
    </>
  )
}
export default App
