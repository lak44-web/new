
import Order from "../models/Order.model.js";



//recordagency
export const create = async (req, res, next) => {
  const { 
    Email,
    password,
    } = req.body;

  const newmark = new Order({
    Email,
    password
    
  });
  try {
    const savedeuip = await newmark.save();
    res.status(201).json(savedeuip);
  } catch (error) {
    next(error);
  }
};




export const getAll = async (req, res, next) => {
  try {
    const equipment = await Order.find();

    if (equipment.length > 0) {
      res.json({
        message: "equipment detail retrieved successfully",
        equipment,
      });
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};






