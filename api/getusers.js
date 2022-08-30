import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 export default  async function handler(req, res) {
  /*     const { name } = request.query;
      response.end("Hello kamel"); */
    try {
        const allusers = await prisma.employee.findMany({
            select: {
                id:true,
            },
        });
        if (allusers==0){
            var json2 = [
                { 
                    
                    id  :"0",
                    email :"null",
                    password   :"null",
                    username     :"null",
                    role      :"null",
                    createdAt   :null,
                    updatedAt   :null,
                    score:"null", }
              ] 
              res.status(200).json(json2)
        }
        else{res.status(200).json(allusers)}
    } catch (error ) {
/*         await logError (error.message);
 */    }

    }


    // playlist/src/index.ts

// #1







