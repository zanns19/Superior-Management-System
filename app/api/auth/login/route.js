import { NextResponse } from "next/server";
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
        const admin = await Admin.findOne({ email: email.toLowerCase().trim() })
        if (!admin) {
            return NextResponse.json(
                {
                    error: "email does not exist"
                },
                {
                    status: "404"
                }
            )
        }
    } catch (error) {

    }

}