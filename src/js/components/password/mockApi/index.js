const delay = 2000;

export const mockForgotPasswordApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({status: success})
    }, delay)
  })
