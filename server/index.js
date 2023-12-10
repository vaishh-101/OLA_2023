const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();
const UserRoute = require('./Routes/UserRoute');
const ContactRouter = require('./Routes/ContactRoute')
const cors = require("cors");
const DeliveryRoute = require('./Routes/delivery');
const ProductRouter = require('./Routes/Products')
const MedicineRoute = require('./Routes/med')
const billRoutes = require('./Routes/bill');


const_dirname = path.resolve();

const PORT = process.env.PORT || 5000 
async function connectToDB(){
    const connection = mongoose.connect(process.env.MONGO_URI)
    if(connection){
        console.log('connected to mongoDB');
    }
}
connectToDB();


const options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};



app.use(cors(options));

app.use(express.json());

app.use('/', billRoutes);
app.use('/api', UserRoute);
app.use('/', ContactRouter)
app.use('/del',DeliveryRoute)
app.use('/product', ProductRouter)
app.use('/med', MedicineRoute)

app.get("/", function(req, res) {
  res.send("Hello");
});

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
 });
}




app.listen(PORT, ()=>{
  console.log('Server starter running on port', PORT);
})