import delay from '../delay'
import data from '../data'

class FeedbackApi {
  static index = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.feedback)
      }, delay)
    })

  static getReport = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.feedbackReport)
      }, delay)
    })

  static create = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, leadData)
    })

  static update = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 1, ...leadData})
    })

  static show = (eventId) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, data.feedback.find(e => e.id == eventId))
    })
}

export default FeedbackApi