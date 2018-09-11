import {
  addHttp,
  validDate,
  pluralize,
  serialize,
  paramsToObj,
  getSlugFromHostName,
} from '../index'
import Auth from '../../auth/actions'

describe('paramsToObj', () => {
  const params = "activeIndex=1"
  const moreParams = "activeIndex=1&nert=str"
  const noParams = ""

  it ('converts params string to json object', () => {
    expect(paramsToObj(params)).toEqual({activeIndex: '1'})
    expect(paramsToObj(moreParams)).toEqual({activeIndex: '1', nert: 'str'})
    expect(paramsToObj(noParams)).toEqual({})
  })
})

describe('getSlugFromHostName', () => {
  const knownSubs = 'help,blog,www,staging,eventplog'
  const validSlug = 'devclagos.eventplog.com'
  const invalidSlug = 'help.eventplog.com'
  const noSlug = 'eventplog.com'

  it('returns a valid slug in the hostname if any', () => {
    expect(getSlugFromHostName(validSlug, knownSubs)).toEqual('devclagos')
    expect(getSlugFromHostName(invalidSlug, knownSubs)).toEqual(false)
    expect(getSlugFromHostName(noSlug, knownSubs)).toEqual(false)
  })
})