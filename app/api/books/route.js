import { NextResponse } from "next/server";
import { prisma } from "../../db";

export const GET = async (req) => {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
};

export const POST = async (req) => {
  const { title, link, img } = await req.json();
  await prisma.book.create({
    data: {
      title: title,
      link: link,
      img: img,
    },
  });
  return NextResponse.json("Book added successfully!");
};
