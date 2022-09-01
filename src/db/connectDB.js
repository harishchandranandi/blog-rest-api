import {  mongoose } from 'mongoose';
import { DB_USERNAME, DB_PASSWORD, DB_NAME} from '../config';

// mconnection.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rkhdn3l.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     }
// );
// connection.on('connected', () => {
//     log('Mongoose connected to DB Cluster');
//   });

//   connection.on('error', error => {
//     log(error.message);
//   });

//   connection.on('disconnected', () => {
//     log('Mongoose Disconnected');
//   });


mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rkhdn3l.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
 }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Mongoose connected to DB Cluster');
});