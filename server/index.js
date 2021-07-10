import express from 'express';
import bodParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import studentRoutes from './routes/students.js'
import subjectRoutes from './routes/subjects.js'

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/students', studentRoutes);
app.use('/subjects', subjectRoutes);

const CONNECTION_URL = "mongodb+srv://mazba:mazba1234@cluster0.je9oc.mongodb.net/linkedSage-job-task?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);