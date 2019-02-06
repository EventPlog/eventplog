import {
  addHttp,
  validDate,
  pluralize,
  serialize,
  titleize,
  paramsToObj,
  getSlugFromHostName,
  genEventLink,
  genCommunityLink,
  genUserProfileLink,
  getUserAvatar,
  removeSpecialChars,
  resizeImage,
  splice,
} from '../index'
import Auth from '../../auth/actions'

describe('addHttp', () => {
  const url = 'example.com'
  const httpUrl = 'http://' + url
  const httpsUrl = 'https://' + url

  it('adds http prefix to a url if it does not exist', () => {
    expect(addHttp(url)).toEqual(httpUrl)
  })

  it('does not change a url if it the http or https prefix exists', () => {
    expect(addHttp(httpUrl)).toEqual(httpUrl)
    expect(addHttp(httpsUrl)).toEqual(httpsUrl)
  })
})

describe('validDate', () => {
  it('returns the date passed in if it is a valid date', () => {
    const date = new Date('12-04-2018')

    expect(validDate(date).toDateString()).toEqual('Tue Dec 04 2018')
  })

  it ('returns today\'s date if the date passed in is invalid', () => {
    expect(validDate('not a date').toDateString()).toEqual((new Date()).toDateString())
  })
})

describe('pluralize()', () => {
  it('returns the plural form of a few predetermined words', () => {
    expect(pluralize('person', 3)).toEqual('people')
    expect(pluralize('follower', 6)).toEqual('followers')
    expect(pluralize('event', 6)).toEqual('events')
    expect(pluralize('comment', 2)).toEqual('comments')
    expect(pluralize('view', 4)).toEqual('views')
  })

  it('returns the same word if it is not contained in the list of words', () => {
    const word = 'chair'
    expect(pluralize(word, 3)).toEqual(word)
  })

  it('returns the same word if it is just one of it', () => {
    const word = 'person'
    expect(pluralize(word, 1)).toEqual(word)
  })
})

describe('serialize()', () => {
  it('serializes an object passed in', () => {
    const obj = {id: 1, title: 'A sample param'}
    expect(serialize(obj)).toEqual('id=1&title=A%20sample%20param')
  })
})

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

describe('titleize()', () => {
  it('return the word passed in with first letter uppercased', () => {
    const word = 'damian'
    const word1 = 'dAmiAn'
    const expected_result = 'Damian'

    expect(titleize(word)).toEqual(expected_result)
    expect(titleize(word1)).toEqual(expected_result)
    expect(titleize(word.toUpperCase())).toEqual(expected_result)
  })

  it('returns an empty string when nothing is passed in', () => {
    expect(titleize(null)).toEqual('')
  })

  it('returns a character when the word sent in is less than two characters', () => {
    expect(titleize('d')).toEqual('D')
  })
})

describe('genEventLink()', () => {
  const event = {
    id: 1,
    slug: 'test'
  }

  const community = {
    id: 1,
    slug: 'testcom'
  }

  it('returns a link for an event with slug when slug exists', () => {
    expect(genEventLink(event, community)).toEqual(`/e/${event.slug}`)
  })

  it('returns a link for an event with id when slug exists', () => {
    expect(genEventLink({id: event.id}, community)).toEqual(`/e/${event.id}`)
  })
  
  it('returns a link without the community if community does not exist', () => {
    expect(genEventLink({id: event.id}, community)).toEqual(`/e/${event.id}`)
  })
})

describe('genCommunityLink()', () => {
  const community = {
    id: 1,
    slug: 'testcom'
  }

  it('returns a link for a community with slug when slug exists', () => {
    expect(genCommunityLink(community)).toEqual(`/c/${community.slug}`)
  })

  it('returns a link for a community with id when slug does not exist', () => {
    expect(genCommunityLink({id: community.id})).toEqual(`/c/${community.id}`)
  })
})

describe('genUserProfileLink()', () => {
  it('generates the link for the user profile page', () => {
    const user = {id: 14, less_formal_name: 'cent'}
    expect(genUserProfileLink(user)).toEqual(`/u/cent-14`)
  })
})

describe('genUserAvatar()', () => {

})

describe('removeSpecialChars()', () => {

})

describe('resizeImage()', () => {
  it('adds the appropriate resize string', () => {
    const imgUrl = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/v1547389644/comments/1j_ud8ovp.jpg'
    const result = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/c_scale,w_300/v1547389644/comments/1j_ud8ovp.jpg'

    expect(resizeImage(imgUrl, 'thumbnail')).toEqual(result)
  })

  it('returns the url if it is not a cloudinary image', () => {
    const nonCloudinaryUrl = 'https://image.com'

    expect(resizeImage(nonCloudinaryUrl, 'thumbnail')).toEqual(nonCloudinaryUrl)
  })

  it('returns a specific size if the size is specified in number', () => {
    const imgUrl = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/v1547389644/comments/1j_ud8ovp.jpg'
    const result = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/c_scale,w_500/v1547389644/comments/1j_ud8ovp.jpg'

    expect(resizeImage(imgUrl, 500)).toEqual(result)
  })

  it('returns the url if no size is passed', () => {
    const imgUrl = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/v1547389644/comments/1j_ud8ovp.jpg'

    expect(resizeImage(imgUrl)).toEqual(imgUrl)

  })
})

describe('splice()', () => {
  it ('inserts a string into another at a defined index', () => {
    const str = 'The  is strong'
    const strToInsert = 'car'
    const expectedRes = 'The car is strong'

    expect(splice(4, 0, str, strToInsert)).toEqual(expectedRes)
  })
})