import Loadable from 'react-loadable'
import Loading from './Loading'

const createLoadable = (callback, chunkName) =>
  Loadable({
    loader: () => callback(),
    loading: Loading,
    options: [chunkName]
  })

export default createLoadable