# check-rest-api
-----------------------------------------------------------------------
For runnig use : "npm run dev"
-----------------------------------------------------------------------

-----------------------------Objective---------------------------------
-----------------------------------------------------------------------

In this checkpoint, you will be performing a series of guided instructions to create a REST API by manipulating your database with mongoose.

    PS: don't forget to comment on your code before submitting it.
-----------------------------------------------------------------------

-----------------------------Instructions------------------------------
-----------------------------------------------------------------------

    1-Start a new Node JS project  with ‘ npm init ‘
    2-Install the mongoose and express and  .env
    3-Configure the environment variables with .env
    4-Lunch a server with express in the server.js file
    5-Connect your database locally or with mongo atlas
    6-The Folder structure should be like this :

config/ .env 

Server.js

     7. Create a models folder and a User.js file in it 

     8. In User.js you must define a mongoose Schema and export the model , you will use it in the server.js

     9. The Folder structure should be like this : 

config/ .env 

models/User.js

Server.js

     10. In the server.js create four routes : 

       GET :  RETURN ALL USERS 

       POST :  ADD A NEW USER TO THE DATABASE 

       PUT : EDIT A USER BY ID 

       DELETE : REMOVE A USER BY ID 

NB : in each callback function you will use mongoose methods to manipulate your data and return it in the response 

     11.  Use postman to test each route.

                 
-----------------------------------------------------------------------------------------
  -Useful Links : 

    1-.env : https://www.npmjs.com/package/dotenv
    2-Express js : https://expressjs.com/
    3-Req.params && req.query : https://coursework.vschool.io/express-params-and-query/
    4-Mongoose : https://mongoosejs.com/
    5-Rest api : https://www.youtube.com/watch?v=SLwpqD8n3d0
