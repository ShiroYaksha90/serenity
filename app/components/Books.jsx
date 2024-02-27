"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "../loading";
import AddBook from "./AddBook";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const books = await res.json();
    setBooks(books);
    setLoading(false);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  if (loading) return <LoadingPage />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/api/books/search?query=${query}`
    );
    const books = await res.json();
    setBooks(books);
    setLoading(false);
  };

  const deleteBook = async (id) => {
    const res = await fetch(`api/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="my-3">
        <input
          type="text"
          placeholder="Search Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered 2-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline bg-blue-100 mx-1">
          Search
        </button>
      </form>
      <AddBook refreshBooks={fetchBooks} />
      {books.map((book) => (
        <div key={book.id}>
          <div className="card w-96 bg-violet-100 shadow-2xl">
            <div className="card-body">
              <p className="">{book.title}</p>
              <figure>
              <img src={book.img} width="200" height="150" />
            </figure>
            <div className="card-actions justify-start">
                <Link
                  href={book.link}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Book details
                </Link>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Books;
