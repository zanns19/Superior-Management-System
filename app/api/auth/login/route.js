import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbconnect from "@/lib/mongodb"
import Admin from "@/models/Admin"
export async function POST(request) {
    try {
        const { email, password } = await request.json()
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and Password are Required!" },
                { status: 400 }
            )
        }
        await dbconnect()
        const admin = await Admin.findOne({email})
        if (!admin) {
            return NextResponse.json(
                {
                    error: "email does not exist"
                },
                {
                    status: "401"
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password,admin.passwordHash)
        if(!isPasswordCorrect){
            return NextResponse.json(
                {message:"Invalid Password"},
                {status:401}
            )
        }
        return NextResponse.json(
            {message:"User Login Succesfully"},
            {status:200}
        )
        
    } catch (error) {
        console.log("Error",error)
        return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    );
    }

}