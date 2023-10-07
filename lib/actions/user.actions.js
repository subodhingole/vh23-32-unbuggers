import User from "../models/user.model";
import Language from "../models/language.model";
import Game from "../models/game.model";
import { connectToDB } from "../mongoose";
export async function fetchUser(userId) {
  try {
    await connectToDB();

    return await User.findOne({ id: userId })
      .populate({
        path: "learningProgress.language",
        model: Language,
      })
      .populate({
        path: "learningProgress.gamesPlayed.game",
        model: Game,
      });
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function updateUser({ email, username, preferredLanguage }) {
  try {
    // Assuming connectToDB is a function that ensures a DB connection is active
    // If it returns a promise, ensure to await it
    await connectToDB();

    // Find a user by email and update their username and preferred language
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      {
        username: username,
        languageToLearn: preferredLanguage,
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the update respects schema validations
      }
    );

    // Check if the user was found and updated
    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}
