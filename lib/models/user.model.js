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
  password: {
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
      language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        required: true,
      },
      level: {
        type: Number,
        required: true,
      },
      lessonsCompleted: {
        type: Number,
        required: true,
      },
      gamesPlayed: [
        {
          game: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Game",
            required: true,
          },
          score: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
