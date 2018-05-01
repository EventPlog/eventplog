import EventApi from './index'

test('.create_from_lead should return the event, organizers and team members', async () => {
  const eventId = 1
  let apiResponse = await EventApi.get(eventId)
  expect(apiResponse.id).toEqual(eventId)
  expect(apiResponse.organizer).not.toBeNull()
  expect(apiResponse.team_members).not.toBeNull()
  expect(apiResponse.tasks).not.toBeNull()
})