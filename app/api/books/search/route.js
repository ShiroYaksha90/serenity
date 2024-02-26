import { NextResponse } from 'next/server';
import books from '../data.json';

export const GET = async(req) => {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');
    const filterdBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    return NextResponse.json(filterdBooks);
}