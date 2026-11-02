import { NextResponse } from "next/server";
import dbconnect from "@/lib/mongodb"
import Admin from "@/models/Admin"
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const {username,email,password,gender} = await request.json();
        await dbconnect()
        const IsAlreadyExist = await Admin.findOne({email})
        if (IsAlreadyExist){
            return NextResponse.json(
                {message:"User Already exists"},
                {status:409},
            )
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password,salt)

        const user = await Admin.create({
            username,
            email,
            passwordHash:hashedPassword,
            gender,
        })
        return NextResponse.json(
            {
            message:"User registered Successfully!",
            user:
                    {
                        username:user.username,
                        email:user.email,
                    },
                
            },
            {status:201}
        )

    } catch (error) {
        console.log("Error",error)
        return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
    }
}