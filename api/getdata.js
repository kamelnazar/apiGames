import prisma from "../lib/prisma";

export default async function handler(req, res) {
    try {
        const data = await prisma.datatb.findMany({
          select:{
            id:true,
            humidity:true,
            temp:true,
            timeupdate:true,
            blocknb:true,
          },
        });
        if (data.length === 0) {
          return res.status(404).json({id:"", humidity: "No data found",temp: "No data found",timeupdate: "2023-03-24T15:30:00.000Z",blocknb:"" });
        }
        else{
          res.status(200).json(data);
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}