# [Did you know...](https://didyouknow-e674820a780f.herokuapp.com/)




## Screenshots 

  |   Description | Screenshot | 
  |:-------------:| -----------|
  | <h3>Home Page</h3> | <img src="https://i.imgur.com/S7usvZQ.png" width="700"> |
  | <h3>Favorites Page</h3> | <img src="https://i.imgur.com/W9C4ool.png" width="700"> |
  | <h3>Details Page</h3> | <img src="https://i.imgur.com/eG9HPq1.png" width="700"> |
  | <h3>Sign up</h3> | <img src="https://i.imgur.com/fCcLd0M.png" width="700"> |
  | <h3>Log in</h3> | <img src="https://i.imgur.com/SahQLbK.png" width="700"> |
  
## Unsolved Problems

None at the moment


## Next Steps
I'm going to incorporate multiple API's.

I will add a random image/gif generator for the details page.

Lastly I will most likely install a search feature for the content of the material.

## User Stories
As a user I would like to be able to click and see random facts.

As a user I would like to be able to 'save' or 'favorite' my favorite facts.

As a user I would like to leave a comment on any fact.

As a user I would like to have a log in or account.


## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Wireframes

![Home Page](https://i.imgur.com/VEpz2Nf.png)

![Sign-in Page](https://i.imgur.com/YUbfHnL.png)

![Log in](https://i.imgur.com/98tFzev.png)

![Details Page](https://i.imgur.com/98tFzev.png)

### Routing Tables

Main Routing Table
----------------------

| URI                      | Rest Route | HTTP Method | Crud Action    | Description                                                           |
| ------------------------ | ---------- | ----------- | -------------- | --------------------------------------------------------------------- |
| /                        | N/A        | GET         | N/A            | Brings the user to the Homepage                                       |
| /auth/login              | N/A        | GET         | N/A            | Brings the user to the login page                                     |
| /auth/signup             | N/A        | GET         | N/A            | Brings the user to the signup page                                    |
| /details/:facts          | N/A        | GET         | N/A            | Brings the user to the individual fact page                           |
| /favorites               | N/A        | GET         | N/A            | Brings the user to favorites page                                     |


ROUTE TABLE (MongoDB)
----------------------

| URI                                       | Rest Route | HTTP Method | Crud Action    | Description                                             |
| ----------------------------------------- | ---------- | ----------- | -------------- |-------------------------------------------------------- |
| /mongo/users/login/:user                  | N/A        | GET         | Read           | Gets the corresponding user profile                     |
| /mongo/users/signup/:user                 | N/A        | GET         | Create         | Creates the user profile within the mongo database      |
| /mongo/users/finduser/:email              | N/A        | GET         | Read           | Finds the active user within the database               |
| /mongo/favorites/users/:userId?AuthHeader | N/A        | GET         | Read           | Gets all favorite facts created under active username   |
| /mongo/favorites/users/:userId?AuthHeader | N/A        | POST        | Create         | Creates a favorite fact under active username           |
| /mongo/favorites/users/:userId?AuthHeader | N/A        | DESTROY     | Delete         | Deletes a favorite fact under active username           |
| /mongo/comments/:fact                     | N/A        | GET         | Read           | Gets all comments                                       |
| /mongo/comments/:commentId?AuthHeader     | Create     | POST        | Create         | Creates a comment within the mongo db                   |
| /mongo/comments/:commentId?AuthHeader     | Update     | PUT         | Update         | Will update a specific comment in the mongo db          |
| /mongo/comments/:commentId?AuthHeader     | Delete     | DESTROY     | Delete         | Will delete a specific comment in the mongo db          |


### Installation Instructions:

1.Make a directory for app, then invoke vite via the following code(replace my-new-app with the name you desire)

```
npm create vite@latest my-new-app -- --template react
```
2.Now in the console initiate tailwind these [instructions](https://tailwindcss.com/docs/guides/vite)

3.After this is complete create the file structure to your liking

4.In the console execute 'npm run dev'

5.Afterward feel free to build as you like. The API I used was [API ninjas](https://api-ninjas.com/), this API requires a key.