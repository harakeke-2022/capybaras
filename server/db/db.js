const connection = require('./connection')

function getStudents (db = connection) {
  return db('students')
    .select()
}

function getFacilitators (db = connection) {
  return db('facilitators')
    .select()
}

function addIssue (issues, db = connection) {
  return db('issues')
    .insert(issues)
}

function listIssues (db = connection) {
  return db('issues')
    .select()
    .join('students', 'student_id', 'student_name')
    .join('faciliators', 'facistuden_id', 'name')
}
module.exports = {
  getStudents,
  getFacilitators,
  addIssue,
  listIssues
}
