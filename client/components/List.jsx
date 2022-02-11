import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchIssues } from '../actions/issues'

function List () {
  console.log('List is rendered')
  const dispatch = useDispatch()
  const issuesState = useSelector(state => state.issues)

  useEffect(() => {
    const action = fetchIssues()
    dispatch(action)
  }, [])

  return (<div>
    <h2>List of Issues</h2>

    <div>
      {issuesState.map(issues =>
        <div className='card' key={issues.id}>
          <h3>Student Name:</h3> <p>{issues.name}</p>
          <h3>Facilitator Name:</h3>
          <p> {issues.facilitator}</p>
          <h3>Issues: </h3><p> {issues.issue}</p>
        </div>
      )}
    </div>
  </div>)
}

export default List
