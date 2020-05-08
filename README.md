# Recipe Box

this is website that helps the user to add, veiw, delete and update different recipe.

The link the website
https://recipe-box-ui.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install:

```
sequelize-cli, yarn, postgres
```

### Installing Backend

A step by step series of examples that tell you how to get a development env running
steps to take

```
git clone https://github.com/Diama1/Recipe-Box.git

```
```
cd Recipe-Box/

```
Install all dependecies
```
yarn

```
```
create a database

```
```
create the .env file and inside add the value of 
DEV_DATABASE_URL=
CLOUD_NAME=
CLOUDINARY_API_ID=
CLOUDINARY_API_SECRET=
```
```
sequelize db:migrate

```
```
yarn start:dev

```
Then test in Postman by POST, GET and DELETE Http request.

### Installing Front-end

A step by step series of examples that tell you how to get a development env running
steps to take

```
git clone https://github.com/Diama1/Recipe-Box-Frontend.git

```
```
cd Recipe-Box-Frontend/

```
Install all dependecies
```
yarn

```
change BACKEND_URL to BASE_URL in action file so that you are able to use the local server.
```
yarn start:dev

```
Then open http://localhost:1234/ to test the app.

Note: Make sure that the backend serveris running 



