import { password, username } from "../const";
import { connect } from "mongoose";

export default async function connectToDB(): Promise<void> {
  console.log("Connecting to DB");
  try {
    await connect(
      `mongodb+srv://${username}:${password}@tingle.luila.mongodb.net/?retryWrites=true&w=majority&appName=Tingle`
    );
  } catch (e: unknown) {
    console.error("Error in Connecting to DB", e);
  }
}
