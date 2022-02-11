import { addNewIssues, getIssues } from '../apis/issues'
export const ADD_ISSUES = 'ADD_ISSUES'

export function addIssues (issues) {
  return {
    type: ADD_ISSUES,
    issues: issues
  }
}

export function fetchIssues () {
  return (dispatch) => {
    return getIssues()
      .then(issues => {
        dispatch(addIssues(issues))
        return null
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export function createNewIssue (issues) {
  return (dispatch) => {
    return addNewIssues(issues)
      .then(() => {
        console.log('film is added to db')
        return getIssues()
      })
      .then(issues => {
        dispatch(addIssues(issues))

        return null
      })
      .catch(error => {
        console.error(error)
      })
  }
}
