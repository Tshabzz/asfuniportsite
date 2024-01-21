import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Email is required']
  },
  lastname: {
    type: String,
    required: [true, 'Email is required']
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required!']
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;