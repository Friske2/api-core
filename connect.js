import mongoos from 'mongoose';
import config from './config';

const { username, password, baseUrl, port, dbName } = config;
mongoos.connect(
  `mongodb://${username}:${password}@${baseUrl}:${port}/${dbName}`,
  { useNewUrlParser: true }
);
mongoos.connection
  .once('open', () => {
    console.log('connect mongodb complete');
  })
  .on('error', error => {
    console.warn('Warning', error);
  });
