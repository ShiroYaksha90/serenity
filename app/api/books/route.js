import { NextResponse } from "next/server";
import { prisma } from "../../db";

export const GET = async (req) => {
    try {
        const books = await prisma.book.findMany();
        return NextResponse.json(books);
      } catch (error) {
        console.error("Error fetching books: ", error);
        return NextResponse.json({ error: "Error fetching books" });
      }
    };

export const POST = async (req) => {
  const { title, link, img } = await req.json();
  try {
    await prisma.book.create({
      data: {
        title: title,
        link: link,
        img: img,
      },
    });
    return NextResponse.json("Book added successfully!");
  } catch (error) {
    console.error("Error adding book: ", error);
    return NextResponse.json({ error: "Error adding book" });
  }
};
