"use server";

import Email from "@/models/email.model";
import connectDb from "@/app/shared/libs/db";
import mongoose from "mongoose";
export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb("newsletter");
    

    console.log(mongoose.models);
    

    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    console.log("found an email", email);

    if (email) {
      await Email.findByIdAndUpdate(email._id, {
        content,
      });
      return { message: "Email updated successfully!" };
    } else {
      await Email.create({
        title,
        content,
        newsLetterOwnerId,
      });
      return { message: "Email saved successfully!" };
    }
  } catch (error) {
    console.log(error);
  }
};
