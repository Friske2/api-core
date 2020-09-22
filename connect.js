import mongoos from 'mongoose';
import config from './config';

const { username, password, baseUrl, port, dbName } = config;
const newPssword = encodeURIComponent(password);
// DeprecationWarning: current Server Discovery and Monitoring engine is
// deprecated, and will be removed in a future version. To use the new Server
// Discover and Monitoring engine, pass option { useUnifiedTopology: true } to
// the MongoClient constructor.
mongoos.set('useUnifiedTopology', true);
mongoos.connect(
  `mongodb://${username}:${newPssword}@${baseUrl}:${port}/${dbName}`,
  { useNewUrlParser: true }
);
mongoos.connection
  .once('open', () => {
    console.log('connect mongodb complete');
  })
  .on('error', error => {
    console.warn('Warning', error);
  });
