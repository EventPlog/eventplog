import delay from '../delay'
import data from '../data'

class UserCommunitiesApi{
  static index = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.communities)
      }, delay)
    })

  static create = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, leadData)
    })

  static update = (leadData) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, {id: 3, ...leadData})
    })

  static show = (communityId) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, delay, data.events.find(u => u.id == communityId))
    })
}

export default UserCommunitiesApi