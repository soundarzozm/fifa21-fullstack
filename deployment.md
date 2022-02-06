# Deployment

The <b>Front-end</b> and the <b>Back-end</b> have to be deployed separately.

## Backend

 - Create a server instance (preferably Linux) and configure the network policies.
 - Install Postrgres and NPM on the server instance.
 - Clone the server files from the repository into the server machine and install the necessary packages with `npm install`
 - Log into psql shell, create a database and run <i>dbutil.py</i> script to dump the dataset into the database.
 - Edit the <i>.env</i> file as required.
 - Run `npm run server`

## Frontend

 - Log into your account in a hosting service like <i>Netlify</i> or <i>Heroku</i>.
 - Create a separate repository for the client alone.
 - In the application configuration on the hosting service, configure the buildpack (repository), pipeline and other required app settings.
 - Click on deploy.


## Localhost

To run the application on a local machine, simply run `npm run server` and `npm start` in the server and the client directories respectively, provided you installed Postgres, NPM, and ran the database dumping script.
