# Introduction

This is a MERN stack project to connect users and showcase their professional profile and engage in discussion in the topics of their choice. It has follwing features:

- Register user (Signup and Login)
- Create profile (add experience, add education, add social links, general profile)
- Edit profile and delete account
- View profile of other users
- Add, delete personal posts
- Like, comment other user posts

  Project is hosted on heroku. To explore the live version of project click on the link [https://idevconnect.herokuapp.com/](https://idevconnect.herokuapp.com/)

## Snapshots

<p align="center"><img src="server/images/home.png" width="450" height="300"/></p>
<p align="center"><img src="server/images/profiles.png" width="550" height="600" /></p>
<p align="center">
<img src="server/images/signup.png" width="400" height="300" />
<img src="server/images/login.png" width="400" height="300" />
</p>
<p align="center"><img src="server/images/user-profile.png" width="550" height="600" /></p>
<p align="center">
<img src="server/images/dashboard.png" width="400" height="300" />
<img src="server/images/add-education.png" width="400" height="300" />
</p>
<p align="center">
<img src="server/images/add-experience.png" width="400" height="300" />
<img src="server/images/edit-profile.png" width="400" height="300" />
</p>
<p align="center">
<img src="server/images/post-feed.png" width="400" height="500" />
<img src="server/images/post-detail.png" width="400" height="500" />
</p>

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

## Run on localhost using docker

To run the project on localhost follow the given steps in `root directory`.

1. Create a new cluster at [Mongodb atlas](https://www.mongodb.com/cloud/atlas). For this follow this [guide](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/).

2. Connect the new cluster using this [guide](https://docs.atlas.mongodb.com/connect-to-database-deployment/)

3. Create the file `keys_dev.js` using format as given below in `server/config` directory.
   ```bash
   cd server/config && touch keys_dev.js
   ```

4. Write the following code in `keys_dev.js` and replace data inside quotation marks.

   ```javascript
   module.exports = {
     mongoURI: "YOUR_MONGODB_DATABASE_URL",
     secretOrKey: "SOME_INSANELY_SECRET_KEY_OF_YOUR_CHOICE", //For JWT payload token
   };
   ```

5. Download Docker for your system [from here](https://www.docker.com/products/docker-desktop/)
   
6. Inside root directory use the following command to run the project.
   ```bash
   docker-compose up
   ```

## Other Instructions

1. If you change any `docker-compose.yml`, `nginx configuration`, `package.json` file then use following command to build and run the images.
   ```bash
   docker-compose up --build
   ```
## Deploy on Heroku

- Download [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Download [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Follow the given [guide](https://devcenter.heroku.com/articles/git)
