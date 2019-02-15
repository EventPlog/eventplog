import initialState from './intialState'
import actionTypes from '../actions/types'
import UpdateItemCollection from 'js/reducers/helpers'

const UserCategoriesReducer = (state=initialState.user_categories, action) => {
    let data
    switch(action.type){
        case actionTypes.USER_CATEGORY_INDEX_START:
          return {...state, loading:true}

        case actionTypes.USER_CATEGORY_INDEX_COMPLETE:
          return {...state, ...action.payload, loading: false}

        case actionTypes.USER_CATEGORY_INDEX_FAIL:
          return{...state, loading: false , error: action.payload}

        case actionTypes.CATEGORY_CREATE_COMPLETE:
          data = [...state.data, action.payload]
          return { ...state, data, loading: false }

        default :
          return state
    };

}

export default UserCategoriesReducer;