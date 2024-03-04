import { NextResponse } from "next/server";
import { prisma } from '../../../../lib/prisma'

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const filterdBooks  = await prisma.book.findMany({
    where: {
        title:{
            contains: query
        }
    }
  })
  return NextResponse.json(filterdBooks);
};
