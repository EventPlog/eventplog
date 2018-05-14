import PrivateRoute from '../PrivateRoute'
// jest.mock('../actions')

describe ('prevents access to a component behind the private route', () => {
  // how would you test it?
  // Find a way to toggle log in status

  it('returns the component when user is logged in', () => {
    // mock the Auth class with .isLoggedIn look up
    // look up jest mocking to do this
    // for this example, set Auth.isLoggedIn to true with the mock
    // assert that the component returned by ProvateRoute is the same one passed in
  })

  it('returns the login component when user is not logged in', () => {
    // for this example, set Auth.isLoggedIn to false with the mock
    // assert that the component returned by ProvateRoute is the login component
  })
})