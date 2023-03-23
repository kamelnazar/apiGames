import prisma from "../lib/prisma";

export default async function handler(req, res) {
    try {
        const data = await prisma.datatb.findMany();
        if (data.length === 0) {
          return res.status(404).json({ message: "No data found" });
        }
        const jsonData = JSON.stringify(data);
        const fileName = 'data.json';
        fs.writeFile(fileName, jsonData, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error file" });
          }
          console.log(`Data saved to ${fileName}`);
          res.status(200).json({ message: "Data was received successfully" });
        });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}