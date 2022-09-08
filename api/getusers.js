import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 export default  async function handler(req, res) {
  /*     const { name } = request.query;
      response.end("Hello kamel"); */
    //  res.setHeader('Access-Control-Allow-Origin', 'https://api-games-sigma.vercel.app/');
     res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Content-Type', 'application/json');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    try {
        const allusers = await prisma.student.findMany({
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







