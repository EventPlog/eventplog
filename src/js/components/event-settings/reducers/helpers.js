import { updateItemInCollection } from 'js/reducers/helpers'

export const updateEventOrganizers = (state, action) => {
  const organizing_team = action
    ? updateItemInCollection(state.organizing_team, action.payload)
    : state.organizing_team
  const organizers = organizing_team.filter(user => user && user.role != 'Volunteer')
  const volunteers = organizing_team.filter(user => user.role == 'Volunteer')
  return {...state, organizing_team, organizers, volunteers}
}