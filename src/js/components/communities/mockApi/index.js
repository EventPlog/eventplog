import data from './data'

const delay = 2000;

export const mockIndexApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
