import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Language =
  mongoose.models?.Language || mongoose.model("Language", languageSchema);

export default Language;
