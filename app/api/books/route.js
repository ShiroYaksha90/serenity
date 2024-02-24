import books from './data.json';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    return NextResponse.json(books);
}