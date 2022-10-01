import prisma from "../lib/prisma";

// POST /api/login
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(422).json({
      error: "Invalid request method",
    });
  }

  const { username } = req.query;

  if (!username)
    return res.status(300).json({ message: "No username provided" });

  try {
    const user = await prisma.student.findMany({
      where: {
        username: username,
      },
    });
    if (user.length > 0) return res.status(200).json([{ user: user[0] }]);

    res.status(200).json({ message: "No user with username was found" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
}
