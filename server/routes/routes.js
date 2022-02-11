const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('hello')
  res.json({ name: 'edsfds' })
})

router.get('/students', (req, res) => {
  db.getStudents()
    .then((students) => {
      return res.json(students)
    })
    .catch(err =>
      console.error(err))
})

router.get('/facilitators', (req, res) => {
  db.getFacilitators()
    .then(facilitators => {
      return res.json({ facilitators: facilitators })
    })
    .catch(err =>
      console.error(err))
})

router.post('/issues', (req, res) => {
  const issue = req.body
  db.addIssue(issue)
    .then(issues => {
      res.json(issues)
      return null
    })
    .catch(err =>
      console.error(err))
})

// router.post('/help', (req, res)
//   db.studentsAndFacilitators()
//     .then(students

module.exports = router
