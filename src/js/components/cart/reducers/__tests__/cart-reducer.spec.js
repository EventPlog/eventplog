import actionTypes from 'js/components/cart/actions/types'
import cartReducer from '../cart-reducer';
import initialState from '../intialState'

describe('cartReducer', () => {
  it('returns the initial state by default', () => {
    expect(cartReducer(undefined, {type: '__INIT__'})).toEqual(initialState.cart)
  })

  describe(`when a ${actionTypes.CART_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.CART_INDEX_START
      }
      const result = cartReducer(initialState.cart, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.CART_INDEX_COMPLETE} type is passed in`, () => {
    const cart = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.CART_INDEX_COMPLETE,
      payload: cart
    }
    const result = cartReducer(initialState.cart, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.CART_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.CART_INDEX_FAIL,
      payload: 'Invalid resource email'
    }
    const result = cartReducer(initialState.cart, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.CART_ITEM_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newCartItem = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.CART_ITEM_CREATE_COMPLETE,
      payload: newCartItem
    }
    const result = cartReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created resource to the state', () => {
      expect(result.data.length).toEqual(1)
      expect(result.data.find(s => s.id == newCartItem.id)).toEqual(newCartItem)
    })
  })

  describe(`when a ${actionTypes.CART_ITEM_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.CART_ITEM_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = cartReducer(state, action)

    console.log(result)
    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted resource from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
