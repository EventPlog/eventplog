const checkEqual = (obj1 = {}, obj2 = {}) => (
  !Object.keys(obj1).some(key => obj1[key] != obj2[key])
)

export default checkEqual
