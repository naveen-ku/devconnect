# Introduction

This is a MERN stack project to connect users and showcase their professional profile and engage in discussion in the topics of their choice. Project is hosted on heroku. To explore the live version of project click on the link [https://idevconnect.herokuapp.com/](https://idevconnect.herokuapp.com/)

## Tech Stack

- **MongoDB** => NoSQL Database
- **ExpressJs** => Web Framework for NodeJs
- **ReactJs** => JavaScript library for front end
- **NodeJs** => JavaScript runtime environment

## Project Architecture

- `client` => contains Reactjs code for frontend
- `config` => contains keys and secret for connecting database
- `models` => contains database models
- `routes` => contains RESTful api/ end routes

## Run on localhost

To run the project on localhost follow the given steps in root directory.

- > `npm install`
- > `npm run client-install`
- > `cd config` && `touch keys_dev.js`
- Write the following code in `keys_dev.js` and replace data inside quotation marks

```javascript
module.exports = {
  mongoURI: "YOUR_MONGODB_DATABASE_URL",
  secretOrKey: "SOME_INSANELY_SECRET_KEY_OF_YOUR_CHOICE", //For JWT payload token
};
```

- > `npm run server`

## Deploy on Heroku

- Download [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Download [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Follow the given [guide](https://devcenter.heroku.com/articles/git)
