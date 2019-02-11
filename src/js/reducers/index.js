import { combineReducers } from 'redux';
import auth from 'js/components/login/reducers'
import lead from 'js/components/leads/reducers'
import events from 'js/components/events/reducers'
import users from 'js/components/user/reducers'
import communities from 'js/components/communities/reducers'
import invitations from 'js/components/invitations/reducers'
import event_checklists from 'js/components/event-planning/reducers'
import todo_items from 'js/components/todo-items/reducers'
import guests from 'js/components/guests/reducers'
import feedback from 'js/components/feedback/reducers'
import organizers from 'js/components/event-settings/reducers'
import event_discussions from 'js/components/event-discussions/reducers'
import event_pictures from 'js/components/event-pictures/reducers'
import resources from 'js/components/resources/reducers'
import presentations from 'js/components/presentations/reducers'
import sponsorships from 'js/components/sponsorships/reducers'
import partners from 'js/components/partners/reducers'
import cart from 'js/components/cart/reducers'
import questions from 'js/components/questions/reducers'
import search from 'js/components/search/reducers'

let rootReducer = combineReducers({
  auth,
  lead,
  events,
  users,
  communities,
  invitations,
  event_checklists,
  todo_items,
  guests,
  feedback,
  organizers,
  event_discussions,
  event_pictures,
  resources,
  presentations,
  sponsorships,
  partners,
  cart,
  questions,
  search,
})

export default rootReducer
