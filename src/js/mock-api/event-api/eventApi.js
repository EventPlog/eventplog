import delay from '../delay'
import data from '../data'

class EventApi {
  static index = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.events)
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
      setTimeout(resolve, delay, data.events.find(e => e.id == eventId))
    })
}

export default EventApi