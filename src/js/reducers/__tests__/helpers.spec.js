import {
  sortInAsc,
  updateItemInCollection
} from '../helpers'

describe('updateItemInCollection', () => {
  describe('when item is present in array', () => {
    it('updates an array with the params', () => {
      const collection = [
        {id: 1, body: 'nothing'},
        {id: 2, body: 'something'},
        {id: 3, body: 'all the things'},
      ]
      const update = {id: 2, body: 'something else'}

      const updatedCollection = [
        collection[0],
        update,
        collection[2]
      ]

      expect(updateItemInCollection(collection, update)).toEqual(updatedCollection)
    })

    it('updates an array when addIfExist is set to true', () => {
      const state = {data: [{id: 1}, {id: 2}]}
      const newPartner = {id: 3, title: 'New horizon'}

      const updatedCollection = [
        ...state.data,
        newPartner
      ]

      expect(updateItemInCollection(state.data, newPartner, true)).toEqual(updatedCollection)
    })
  })
})