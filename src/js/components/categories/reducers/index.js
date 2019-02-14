import { combineReducers } from 'redux';
import category from './category-reducer';
import categories from './categories-reducer';
import categories_suggestions from './categories-suggestions-reducer';
import user_categories from './user-categories-reducer'

let rootCategoriesReducer = combineReducers({
  category,
  categories,
  categories_suggestions,
  user_categories
})

export default rootCategoriesReducer