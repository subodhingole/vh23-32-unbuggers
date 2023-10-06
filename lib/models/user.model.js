import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {  // Assuming you'll be storing a hashed password
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  languageToLearn: {
    type: String,
    required: true,
  },
  learningProgress: [
    {
      language: String,
      level: Number,
      lessonsCompleted: Number,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
