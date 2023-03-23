import prisma from "../lib/prisma";

export default async function handler(req, res) {
  const data = req.body;
  const { humidity, temp, timeupdate } = data;

try {
    await prisma.datatb.create({
        data: {
            humidity,
            temp,
            timeupdate,
        },
      });
      res.status(200).json({ message: "User was created successfully" });
} catch (error) {
    res.status(400).json({ message: error.message });
}


}

