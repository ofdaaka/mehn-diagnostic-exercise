/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')



/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const IssueSchema = mongoose.Schema(
  {
    description: String,
    createdAt: Date,
    status: String,
    priority: String
    

  }
)

 
/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleCollection = mongoose.model('Sample', SampleModelSchema)

const IssueCollection = mongoose.model('Issue', IssueSchema)
/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */


function createIssue() {
  return IssueCollection.create({
    description: "",
    createdAt: new Date(), 
    status: "",
    priority: "" 
  })
}

function getAllIssues() {
    return IssueCollection.find()
}

function  getIssue(issueId) {
  return IssueCollection.findById(issueId)
}

function addNewIssue(newIssue) {
    return IssueCollection.insertMany([newIssue])
  }  

function updateIssue(issueId, updatedIssue) {
  return IssueCollection.findByIdAndUpdate(issueId, updatedIssue)
}

function deleteIssue(issueId) {
    return IssueCollection.findByIdAndDelete(issueId)
  }
  
  
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllIssues,
  getIssue,
  addNewIssue,
  updateIssue,
  deleteIssue
}