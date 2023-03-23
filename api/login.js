import prisma from "../lib/prisma";

// POST /api/login
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader("Content-Type", "application/json");
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", false);

  if (req.method !== "POST") {
    return res.status(422).json({
      error: "Invalid request method",
    });
  }

  const { username } = req.body.data;

  if (!username)
    return res.status(300).json({ message: "No username provided" });

  try {
    const user = await prisma.student.findMany({
      where: {
        username: username,
      },
    });
    if (user.length > 0) return res.status(200).json(user[0]);

    res.status(200).json({ message: "No user with username was found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
