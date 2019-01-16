import { combineReducers } from 'redux';
import question from './question-reducer';
import questions from './questions-reducer';

let rootQuestionsReducer = combineReducers({
  question,
  questions,
})

export default rootQuestionsReducer