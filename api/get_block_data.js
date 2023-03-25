import prisma from "../lib/prisma";
export default async function handler(req, res) {
    try {
        const data = await prisma.block.findMany({
          select:{
            id:true,
            plantname:true,
            pumpnb:true,
            datepump:true,
          },
        });
        if (data.length === 0) {
          return res.status(404).json({id:"", plantname: "No data found",pumpnb: "No data found",datepump: "2023-03-24T15:30:00.000Z" });
        }
        else{
          res.status(200).json(data);
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}