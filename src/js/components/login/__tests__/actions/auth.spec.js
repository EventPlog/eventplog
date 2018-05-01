import * as auth from '../../actions/index'

it('calls auth', () => {
  expect(auth.fakeAuth.currentUser).toEqual({})
  auth.fakeAuth.authenticate()
  expect(auth.fakeAuth.currentUser).toEqual({
    name: 'Kent Beck'
  })

})