// carModel.js
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  acceleration: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

export default Car;
