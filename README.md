[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)

[![Code Climate](https://codeclimate.com/github/cloudfoundry/membrane.png)](https://codeclimate.com/github/cloudfoundry/membrane)
[![Build Status](https://travis-ci.org/cloudfoundry/membrane.png)](https://travis-ci.org/cloudfoundry/membrane)


![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)


# stack-overflow-lite-API
NOTE: all endpoints are tested with POSTMAN.

# Description
StackOverflow-lite is a question and answer site for programmers. This sites contains a UI- baranch and an API-endpoint branch. This api-endpoints run a get, post, put and delete request..
https://safe-dawn-45814.herokuapp.com/api/v1/questions runs all questions posted on the site,
https://safe-dawn-45814.herokuapp.com/api/v1/questions/:id this on the other-hand shows the specific question being requested
https://safe-dawn-45814.herokuapp.com/api/v1/questions/:id/answers this link hosted on heroku runs shows all answers posted on the site via postman

# Features
- page can get all questions
- page can get specific questions
- user can get post questions
- users can post answers
- users can delete an answers
- users can also update questions
- users can delete questions


# Heroku link
This app is deployed using heroku
https://safe-dawn-45814.herokuapp.com/api/v1/questions

# GITHUB page of UI
this deploys the UI using github hosting page
https://captainprime.github.io/ui-templates/index.html

# Technology used
- node.js
- express.js
- style guide: Airbnb
- eslint
- jasmine

# Installation
To run this app, create  a folder and clone the repo, after repo has been cloned, pull files into folder. this creates a replica of this gitHub repo. Ensure the the following are installed on the system: node.js, express.js, eslint, jasmine ...

# Installing node.js 
- Test Node. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type node -v . ...
- Test NPM. ...
- Create a test file and run it.

# installing eslint
Run the following command on the terminal
- npm install -g eslint (this is installing eslint globally)
- eslint -v (check version)
- which eslint (see where installed)
