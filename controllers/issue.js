const express = require('express')

const issueApi = require('../models/issue.js')

const issueRouter = express.Router()

issueRouter.get('/', (req, res) => {
  issueApi.getIssue().then(issue => {
    res.render('./issues/issues', { issue });
  });
});

issueRouter.post('/', (req, res) => {
  issueApi.addNewIssue(req.body).then( addedIssue => {
    //redirects back to the add new issue page when finished
    res.redirect('/issues');
  });
});

issueRouter.get('/:issueid', (req, res) => {
  res.render('./issues/newIssueForm');
});

issueRouter.delete('/:id', (req, res) => {
  issueApi.deleteIssue(req.params.id).then(issue => {
    res.redirect('/issues/issues');
  })
});

issueRouter.put('/:id', (req, res) => {
  issueApi.updateIssue(req.params.id, req.body).then(issue => {
    res.redirect('/issue/' + req.params.id);
  });
});

issueRouter.get('/:id', (req, res) => {
  issueApi.getIssue(req.params.id).then(issue => {
    res.render('./issues', { issue });
  });
});

// let datePicker = new Date().toISOString().substr(0, 10);
// document.querySelector("#datePicker").value = today;

// const dateString = date.getFullYear() + '-'
//   + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
//   + ('0' + date.getDate()).slice(-2);

module.exports = {
  issueRouter
}