import User  from '../database/userModel.js';

import pkg from 'bcryptjs';
const { genSalt, hash, compare } = pkg;

// Function to handle user registration
export async function registerUser(req, res) {
  const { name, email, password, image } = req.body;

  try {
    // Check if the user with the given email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // If the user does not exist, create a new user with hashed password
    user = new User({
      name,
      email,
      password,
      image
    });

    // Hash the password before saving it to the database
    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error in user registration:', err.message);
    res.status(500).send('Server Error');
  }
}

// Function to handle user login
export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user with the given email exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    

    res.json(user);
  } catch (err) {
    console.error('Error in user login:', err.message);
    res.status(500).send('Server Error');
  }
}
