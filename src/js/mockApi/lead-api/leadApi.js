import delay from '../delay'

class LeadApi {
  static create = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, leadData)
    })

  static update = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 1, ...leadData})
    })

  static updateTeamMembers = (leadId, strTeamMembers) =>
    new Promise((resolve, reject) => {
      const teamMembers = strTeamMembers.split(',')
      setTimeout(resolve, delay, {id: leadId, teamMembers})
    })

  static updateOrganizer = (leadId, organizer) =>
    new Promise((resolve, reject) => {
      // in the backend, create a person with the organizer details
      // then create an event with the lead
      // finally create team members - with their email addresses
      // send event with organizer and team members to this route
      const event = {
        id: leadId,
        title: 'An event title',
        team_members: [{id: 1, first_name: 'Ugonna', last_name: 'Okere'}],
        organizer}
      setTimeout(resolve, delay, event)
    })
}

export default LeadApi