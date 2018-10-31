import initialState from './intialState'
import actionTypes from '../actions/types'
import UpdateItemCollection from 'js/reducers/helpers'

const UserCommunitiesReducer = (state=initialState.user_communities, action) => {
    let data
    switch(action.type){
        case actionTypes.USER_COMMUNITY_INDEX_START:
          return {...state, loading:true}

        case actionTypes.USER_COMMUNITY_INDEX_COMPLETE:
          return {...state, ...action.payload, loading: false}

        case actionTypes.USER_COMMUNITY_INDEX_FAIL:
          return{...state, loading: false , error: action.payload}

        case actionTypes.COMMUNITY_CREATE_COMPLETE:
          data = [...state.data, action.payload]
          return { ...state, data, loading: false }

        default :
          return state
    };

}

export default UserCommunitiesReducer;