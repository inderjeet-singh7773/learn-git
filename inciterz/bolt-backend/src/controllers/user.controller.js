import { createUser, getUsers } from "../services/user.service.js";

export async function addUser(req, res) {
  try {
    const user = await createUser(req.body);
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function listUsers(req, res) {
  const users = await getUsers();
  res.json(users);
}
