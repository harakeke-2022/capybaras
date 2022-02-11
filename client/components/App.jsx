import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIssues } from '../actions/issues'

import { Route, Routes } from 'react-router-dom'

import Form from './Form'
import List from './List'

function App () {
  const issues = useSelector(state => state.issues)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIssues())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Capybara Help Desk</h1>
        <div className="img" ></div>
        <Form />
        <Routes>
          <Route path ='/list' element = {<List />} />
        </Routes>
      </div>
    </>
  )
}

export default App
