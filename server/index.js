import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import User from './models/User.js';
import ServiceRequest from './models/ServiceRequest.js';

const app = express()
app.use(express.json());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
        console.log("Connected to MongoDB📦");
    }
}
connectMongoDB();

// health api
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "All Good🏆",
    });
});

// POST / Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            success: false,
            message: 'please provide email and password'
        })
    }
    const user = await User.findOne({
        email: email,
        password: password
    })

    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "Login successful"
        });
    }
    else {
        return res.json({
            success: false,
            message: "Invalid credentials"
        })
    }
})

// POST /signup
app.post("/signup", async (req, res) => {
    const {
        name,
        email,
        password,
        mobile,
        address,
        gender,
        roll
    } = req.body;

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender,
        roll: roll
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            data: savedUser,
            message: "Signup Successfully"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
});

 // GET /serviceRequest
app.get("/serviceRequests", async (req, res) => {
    const serviceRequests = await ServiceRequest.find();
  
    res.json({
      success: true,
      data: serviceRequests,
      message: "ServiceRequests fetched successfully"
    });
  });

// POST /serviceRequest
app.post("/serviceRequest", async (req, res) => {
    const {
      type,
      description,
      address,
      mobile,
      user,
      status,
      charges,
      provider
    } = req.body;
  
  
    const serviceRequest = new ServiceRequest({
        type,
        description,
        address,
        mobile,
        user,
        status,
        charges,
        provider
    });
  
   try{
    const savedServiceRequest = await serviceRequest.save();
  
    res.json({
      success: true,
      data: savedServiceRequest,
      message: " serviceRequest created successfully"
    });
   }
    catch(e){
      res.json({
        success: false,
        message: e.message
      });
    }
  });

  // GET /serviceRequest/:id
app.get("/serviceRequest/:id", async (req, res) => {
    const {id} = req.params;
  
    const serviceRequest = await ServiceRequest.findById(id);
  
    res.json({
      success: true,
      data: serviceRequest,
      message: "ServiceRequest  fetched successfully"
    });
  });

  // PUT /product/:id
app.put("/serviceRequest/:id", async (req, res) => {
    const {id} = req.params;
  
    const {
        type,
        description,
        address,
        mobile,
        user,
        status,
        charges,
        provider
    } = req.body;
  
    await ServiceRequest.updateOne({_id: id}, {$set: {
        type,
        description,
        address,
        mobile,
        user,
        status,
        charges,
        provider
    }});
  
    const updatedServiceRequest = await serviceRequest.findById(id);
  
    res.json({
      success: true,
      data: updatedServiceRequest,
      message: "    ServiceRequest updated successfully"
    });
  });

  // DELETE /product/:id
app.delete("/serviceRequest/:id", async(req, res)=>{
    const {id} = req.params;
  
    await ServiceRequest.deleteOne({_id: id});
  
    res.json({
      success: true,
      message: "ServiceRequest deleted successfully"
    });
  })
  
  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});