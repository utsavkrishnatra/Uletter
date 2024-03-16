"use server";

import Email from "@/models/email.model";
import  connectDb  from "@/app/shared/libs/db";

export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb("newsletter");
    const emails = await Email.find({ newsLetterOwnerId });
    return emails;
  } catch (error) {
    console.log(error);
  }
};