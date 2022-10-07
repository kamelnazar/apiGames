import prisma from "../lib/prisma";

export default async function handler(req, res) {
  // to solve CORS error
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(422).json({
      error: "Invalid request method",
    });
  }

  const data = req.body;
  const { email, password, username, role, score } = data;

  try {
    await prisma.student.create({
      data: {
        email,
        password,
        username,
        role,
        score,
      },
    });

    res.status(200).json({ message: "User was created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
