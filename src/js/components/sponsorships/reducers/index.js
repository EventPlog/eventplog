import { combineReducers } from 'redux';
import sponsorship from './sponsorship-reducer';
import sponsorships from './sponsorships-reducer';
import sponsorship_offer from './sponsorship-offer-reducer';
import sponsorship_offer_items from './sponsorship-offer-items-reducer';

let rootPresentationsReducer = combineReducers({
  sponsorship,
  sponsorships,
  sponsorship_offer,
  sponsorship_offer_items
})

export default rootPresentationsReducer