# tic-tac-toe
Project 3

This application is a learning tool that allows teachers to create interactive tic-tac-toe board(s) to add differentiation to their classroom - at school, at home or anywhere in an online learning environment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Project Overview](#Project-Overview)
* [User Story](#User-Story)
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Installation](#Installation)
* [Usage](#Usage)
* [Screenshots](#Screenshots)
* [License](#License)
* [Acknowledgements](#Acknowledgements)
* [Contributing](#Contributing)
* [Issues](#Issues)
* [Authors](#Authors)
<br>

## Project Overview
A user will be able to login and create, edit and delete a new tic-tac-toe grid. Each tic-tac-toe game will have nine different activities for the user to create, save and edit. 

![noughts-crosses-black](https://user-images.githubusercontent.com/67722377/107911213-2cb63d00-6fb0-11eb-97ac-5fa1fe754990.png)

### **What is a tic-tac-toe?**
This strategy uses the familiar three-by-three grid of a tic-tac-toe board into which the teacher inserts different activities in each square. Once all nine activities have been entered and saved, the grid is shared with students. Students choose three activities to create 'three in a row,' just like playing the original game. To ensure all students are supported the activities are designed to support a variety of learning styles and abilities.

## User Story
AS a teacher
I WANT to be able to create a tic-tac-toe board, filling it with differentiated learning experiences for my students
I WANT to be able to edit and share these tic-tac-toe grids with my students
SO THAT I can engage & support all students to learn at their ability level.
<br>

## Link to the App
Please visit the <a href="https://github.com/sareronald/tic-tac-toe.git">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="https://tictactoe-learning.herokuapp.com/">TIC-TAC-TOE</a> application, hosted on Heroku.
<br>


## About this project
### **How the app works**
This project is full-stack application, using React to create the front-end user experience and Sequelize and MySQL to store data in the backend. The user (teacher) is required to Signup and Login. Once logged in they are able to create a new tic-tac-toe game and populate each of the nine squares with a description of the activity and resources/hints. The teacher is able to create and edit the activities before sharing the entire tic-tac-toe with their students. 

The tic-tac-toe app could be projected on a whiteboard for the teacher to use one of the activities as a introductory exercies or the link could be added to a Google Classroom post for the students to access the grid and complete tasks independently.
  
### **Business Context** 
Covid-19 has seen a dramatic change in the way secondary education is delivered. In 2020 teachers and students alike had to quickly transition into an online learning environment. This app is designed to provide differentiated learning experiences so that all students can achieve in this environment. Differentiation is something that all teachers do within their classroom, depending on the knowledge and ability of their students - this app allows them the ability to translate this experience online, at home or in the classroom.
<br>

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Heroku](https://www.heroku.com/) to host the site

* **Frontend Technology:**
  * CSS
  * Javascript
  * [Bootstrap](https://getbootstrap.com/)
  * [Axios npm](https://www.npmjs.com/package/axios)
  * [React](https://reactjs.org/docs/getting-started.html)
  * [React Router DOM](https://reactrouter.com/web/guides/quick-start)
  
  * **Backend Technology:**
  * [Sequelize](https://www.npmjs.com/package/mysql)
  * [MySQL](https://www.npmjs.com/package/mysql)
  * [Express](https://www.npmjs.com/package/express)
  * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [Express-Session](https://www.npmjs.com/package/express-session)
  * [Nodemon](https://www.npmjs.com/package/nodemon)
  * [Postman](https://www.postman.com/)
  * [passport](https://www.npmjs.com/package/passport)
  * [passport-local](https://www.npmjs.com/package/passport-local)
  * [bycrypt.js](https://www.npmjs.com/package/bcryptjs)

## Installation
To install this tic-tac-toe app:
1. Clone this GitHub repository to your local machine
```
git@github.com:sareronald/tic-tac-toe.git
```
2. Open a terminal window and navigate to the local directory. Run: 
```
npm install
```

## Usage
#### **Instructions**
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
<br>

## Screenshots
#### **Landing Page**
![tictactoe_screenshot](https://user-images.githubusercontent.com/67722377/107864785-e11e6900-6eb3-11eb-8dc5-1496c7ea9921.png)
<br>

#### **My Tic-Tac-Toe Page**
![tic-tac-toe-myTictactoes](https://user-images.githubusercontent.com/67722377/107910575-d3014300-6fae-11eb-9406-78432a6fad5e.png)
<br>

#### **Activity Page**
![tic-tac-toe-grid](https://user-images.githubusercontent.com/67722377/107910630-eca28a80-6fae-11eb-9296-c2ca62c1dbdd.png)
<br>

#### **Creating a new Activity**
![tic-tac-toe-addActivity](https://user-images.githubusercontent.com/67722377/107910738-152a8480-6faf-11eb-8b0e-ae7ddc384600.png)

## Licence
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements
* [Shutterstock](https://www.shutterstock.com/home) has been used to source the coloured 'tile' on the My Tic-Tac-Toe page.

## Contributing
Any contributions are appreciated. Be sure to review the contributing guidelines and code of conduct. By participating, you are expected to uphold this code. Use your best judgement and feel free to propose changes to this document in a pull request. Should you have any questions, feel free to contact me directly using the email below.
<br>

## Issues
If you find an issue while using the app or have a request, [log the issue](https://github.com/sareronald/tic-tac-toe/issues) or request here. These will be addressed in a future code update.
<br>
<hr>

## Authors
- **SARAH RONALD** <br>
  Contact information:
  sareronald@hotmail.com <br>
  GitHub link:
  [sareronald](https://github.com/sareronald)

