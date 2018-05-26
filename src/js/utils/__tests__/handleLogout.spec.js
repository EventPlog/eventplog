import handleLogout from '../handleLogout'
import Auth from '../../auth/actions'

jest.mock('../../auth/actions')

beforeEach(() => {
  Auth.logout.mockClear();
});

describe('handleLogout', () => {
  it ('calls the logout action of Auth', () => {
    let store = {
      dispatch: (cb) => Promise.resolve()
    }
    handleLogout(store);
    expect(Auth.logout).toHaveBeenCalledTimes(1)
  })
})