import { ADD_ISSUES } from '../actions/issues'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ISSUES:
      return action.issues
    default:
      return state
  }
}

export default reducer
