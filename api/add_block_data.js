import prisma from "../lib/prisma";

export default async function handler(req, res) {
  const data = req.body;
  const { plantname, pumpnb} = data;

try {
    await prisma.block.create({
        data: {
            plantname,
            pumpnb,
        },
      });
      res.status(200).json({ message: "data was added successfully" });
} catch (error) {
    res.status(400).json({ message: error.message });
}
}