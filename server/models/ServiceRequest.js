const { Schema, model } = require("mongoose");


const serviceRequestSchema = new Schema({
    type: {
        type: String,    
    },
    description : {
        type: String,    
    },
    address: {
        type: String,    
    },
    mobile: {
        type: Number,    
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },

      status: {
        type: 'String',
        default: 'pending'
      },

      charges: {
        type: Number,
      },

      provider: {
        type: String,
        default: ' '
      }
   
}, {
    timestamps: true 
});

const ServiceRequest = model("ServiceRequest", serviceRequestSchema);


module.exports = ServiceRequest;
