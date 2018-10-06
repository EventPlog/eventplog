import initialState from './intialState'
import actionsTypes from '../actions/types'
import UpdateItemCollection from 'js/reducers/helpers'

const CommunityReducer =(state=initialState.user_communities, action) =>{
    let data
    switch(action.type){
        case actionsTypes.USER_COMMUNITIES_INDEX_START:
            return {...state, loading:true}
        case actionsTypes.USER_COMMUNITIES_INDEX_COMPLETE:
            return {...state, ...action.payload, loading: false}
        case actionsTypes.USER_COMMUNITIES_INDEX_FAIL:
            return{...state, loading: false , error: action.payload}
        default :
            return state
    };

}

export default CommunityReducer;