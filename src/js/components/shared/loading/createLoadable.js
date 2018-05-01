import Loadable from 'react-loadable'
import Loading from './Loading'

const createLoadable = (callback) =>
  Loadable({
    loader: () => callback(),
    loading: Loading
  })

export default createLoadable