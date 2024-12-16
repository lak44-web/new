import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
 

 
 Email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
 
 
 
 
  
 
  
});


const Order = mongoose.model('date', orderSchema);

export default  Order;