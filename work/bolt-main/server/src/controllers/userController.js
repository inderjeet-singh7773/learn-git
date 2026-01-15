exports.createUser = (req, res) => {
  const { name, email } = req.body;

  res.json({
    message: "User created successfully",
    data: { name, email },
  });
};

exports.getUsers = (req, res) => {
  res.json([
    { name: "Inderjeet", email: "inderjeet@mail.com" },
    { name: "Test User", email: "test@mail.com" },
  ]);
};
