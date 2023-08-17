import bcrypt from 'bcrypt'
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import {NextResponse} from 'next/server'

export async function POST(req){
    const body = await req.json()
    console.log(body)
    const {name,email,password} = body
    // if( !email || !password) {
    //     return new NextResponse("Missing Feilds",{status : 400})
    // }
    // const alreadyExists = await prisma.user.findUnique({
    //     where : {
    //         email
    //     }
    // })

    // if(alreadyExists) throw new Error("Email already Exists.")

    const hashedPassword  = await bcrypt.hash(password,12)

    const user = await prisma.user.create({
        data : {
           name,
         email,
            hashedPassword,
        }
    })
    return NextResponse.json({msg: "Worked"})
}