import {
  addHttp,
  validDate,
  pluralize,
  serialize,
  paramsToObj,
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