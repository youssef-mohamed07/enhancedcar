import Car from '../models/carModels.js';


const addCar = async (req, res) => {
  try {
    const carData = req.body;

    const newCar = new Car({
      id: Date.now(), 
      ...carData,
    });

    await newCar.save();

    res.status(201).json({ message: 'Car data added successfully!' });
  } catch (error) {
    console.error('Error adding car data:', error);
    res.status(500).json({ message: 'Failed to add car data' });
  }
};

export { addCar };
