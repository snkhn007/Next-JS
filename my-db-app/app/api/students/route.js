
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET() {
    try {
        const students = await prisma.student.findMany();

        return NextResponse.json(students);
    } catch (error) {
        console.error("Error fetching students:", error);

        return NextResponse.json(
            { message: "Failed to fetch students" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, course } = body;

        // Validate the input fields
        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !email.trim() ||
            typeof course !== "string" || !course.trim()
        ) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Create a new student
        const student = await prisma.student.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                course: course.trim()
            }
        });

        return NextResponse.json(student, { status: 201 });

    } catch (error) {
        console.error("Error adding student:", error);

        // Handle duplicate email
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { message: "Failed to add student" },
            { status: 500 }
        );
    }
}
