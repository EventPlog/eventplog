import delay from '../delay'

class EventApi {
  static create = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, leadData)
    })

  static update = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 1, ...leadData})
    })

  static get = (eventId) =>
    new Promise((resolve, reject) => {
      const event = {
        id: eventId,
        title: 'An event title',
        team_members: [{id: 1, first_name: 'Ugonna', last_name: 'Okere'}],
        organizer: {id: 1},
        tasks: [{id: 1}]
      }
      setTimeout(resolve, delay, event)
    })
}

export default EventApi