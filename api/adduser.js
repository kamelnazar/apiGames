import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default  async function handler(req, res) {
    const data = req.body;
    const {
        email,
        password,
        username,
        role,
        score,
    } = data;
    console.log(data);
    try {
        await prisma.employee.create({
            data: {
                email,
                password,
                username,
                role,
                score,
            },
          });
          
        res.status(200).json({message:"Customer was created succefully",});
    } catch (error) {
        res.status(400).json({message:error.message,});
    }
}