import request from 'superagent'

const rootUrl = '/api/v1/capybara'

// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }

export function getIssues () {
  return request.get('/api/v1/capybara/issues')
    .then(res => {
      console.log(res.body)
      return res.body
    })
  // return Promise.resolve([
  //   { id: 1, name: 'hiro', facilitator: 'Ahmad', issue: 'need help' },
  //   { id: 2, name: 'Ben d', facilitator: 'Ahmad', issue: 'need help' }])
}

export function addNewIssues () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.issues
    })
}
