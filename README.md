# Giphinator

#### Requirements:
- Nodejs (at least v5)
- npm

#### Running:
Install dependencies - `npm install`
Run migrations on your postgres instance - `DATABASE_URL={YOUR_POSTGRES_DATABASE_URL} npm run migrations`
Run the application - `DATABASE_URL={YOUR_POSTGRES_DATABASE_URL} PORT={YOUR_PORT} npm start`

# Instructions

 This API should query the giphy API for any provided query string. This data should be cached on a PostgreSQL database using the provided migrations and schemas.
 
 REQUIREMENTS:
 - Complete the `./lib/handlers/giphinate.js` handler to call the giphy API and cache responses. The GIF URL should be eturned to the client in an appropriate fashion.
 - Create a new `DELETE` route and controller which deletes the record associated with the query text sent up.
 - Create a set of tests for each endpoint
 
 NOTES:
 - You should use at least node version 5.7
 - The API should follow RESTful practices
 - The code style defined in the `.jscsrc` and `.jshintrc` files should be followed
 - Bonus points will be given for useful abstraction
