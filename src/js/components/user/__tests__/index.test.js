import Login from '../index'
import * as auth from '../index'

test.skip('.auth', () => {
  it('returns the auth controller', () => {
    expect(auth.fakeAuth).toBeDefined()
  })
})
