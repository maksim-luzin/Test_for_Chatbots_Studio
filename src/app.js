import express from 'express';
import passport from 'passport';
import sequelize from './db/connection';
import env from './env';

import routes from './routes';
import authorizationMiddleware from './middlewares/authorizationMiddleware';
import routesWhiteList from './config/routesWhiteListConfig';
import './config/passportConfig';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app = express();

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/', authorizationMiddleware(routesWhiteList));

routes(app);

app.use(errorHandlerMiddleware);

const port = process.env.NODE_ENV === 'production'
  ? process.env.PORT
  : env.app.port;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}!`);
});
