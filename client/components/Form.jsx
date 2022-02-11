import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewIssue } from '../actions/issues'

import { useNavigate } from 'react-router-dom'

function Form () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    id: '',
    name: '',
    facilitator: '',
    issue: ''
  })

  function handleChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('this is form', form)
    const updateForm = {
      ...form,
      id: parseInt(form.id),
      name: '',
      facilitator: '',
      issue: ''
    }

    dispatch(createNewIssue(form))
    navigate('/')
  }

  return (
    <>
      <form>
        <h2>Issue Request Form</h2>
        <select onChange={handleChange} name="name" placeholder = 'Select your name'>
          <option>Select Your Name</option>
          <option value="BenD">BenD</option>
          <option value="BenA">BenA</option>
          <option value="Campbell">Campbell</option>
          <option value="Hiro">Hiro</option>
        </select>

        <select onChange={handleChange} name="facilitator" placeholder = 'Select facilitator name'>
          <option>Select Facilitator Name</option>
          <option value="Ahmad">Ahmad</option>
          <option value="Eleanor">Eleanor</option>
          <option value="Jared">Jared</option>
          <option value="Prue">Prue</option>
        </select>
        {/* <input
          type='text'
          value={form.name}
          name='name'
          onChange={handleChange}
          placeholder='Enter your name'
        /> */}

        {/* <input
          type='text'
          value={form.facilitator}
          name='facilitator'
          onChange={handleChange}
          placeholder='Enter facilitator name'
        /> */}

        <textarea
          type='text'
          value={form.issues}
          name='issues'
          onChange={handleChange}
          placeholder='Enter your issue'
        />

        {/* <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Neon button
        </a> */}
        <button className='primary' onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>SUBMIT</button>
      </form>
    </>
  )
}

export default Form
