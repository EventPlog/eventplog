import EventApi from './index'

import data from '../data'

describe('.show()', () => {
  it('should return a single event matching an id', async () => {
    const event = data.events[0]
    let apiResponse = await EventApi.show(event.id)
    expect(apiResponse.id).toEqual(event.id)
    expect(apiResponse.title).toEqual(event.title)
  })
})