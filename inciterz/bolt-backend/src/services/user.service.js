import User from "../models/user.model.js";

export async function createUser(data) {
  return await User.create(data);
}

export async function getUsers() {
  return await User.find();
}
