import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import expressLayouts from 'express-ejs-layouts';
import router from './routes/index.js';
import { connectWithDb } from './config/mongoose.js';
const {PORT}=process.env;

const port = PORT||8000;

const app = express();

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', router);
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is running on the port: ${port}`);
  connectWithDb();
});
