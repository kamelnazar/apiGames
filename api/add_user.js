import prisma from "../lib/prisma";

export default async function handler(req, res) {
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
