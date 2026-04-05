import {NextResponse} from "next/server";
import {connectToDatabase} from "@/database/mongoose";

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({success: true, message: "Database connected successfully"});
    } catch (error: any) {
        console.error("Database connection error:", error);
        return NextResponse.json({success: false, message: "Database connection failed", error: error.message}, {status: 500});
    }
}
