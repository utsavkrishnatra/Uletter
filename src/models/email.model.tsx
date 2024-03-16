import mongoose from "mongoose";

const { Schema } = mongoose;

const emailSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
  },
  { timestamps: true }
);

// Check if the model has already been defined
// console.log(mongoose.models);

const Email = mongoose.models.email || mongoose.model("email", emailSchema);
//const Email = mongoose.models.emails || mongoose.model("emails", emailSchema);--stargate

export default Email;
