"use client";

import { useState } from "react";

const AddBook = ({ refreshBooks }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLink, setNewBookLink] = useState("");
  const [newBookImg, setNewBookImg] = useState("");

  const handleSubmitNewBook = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/books/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        link: newBookLink,
        img: newBookImg,
      }),
    });
    if (res.ok) {
      setNewBookTitle("");
      setModalOpen(false);
      refreshBooks();
    }
  };

  return (
    <div>
      <button
        className="btn bg-blue-100 border-amber-950 text-amber-950 mb-3 hover:bg-blue-200 hover:text-rose-50 "
        onClick={() => setModalOpen(true)}
      >
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form
          method="dialog"
          className="modal-box bg-rose-100 shadow-2xl p-4"
          onSubmit={handleSubmitNewBook}
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-amber-950"
            onClick={() => setModalOpen(false)}
          >
            x
          </button>
          <h3 className="text-2xl font-bold text-amber-950 mb-3">Add Book</h3>
          <input
            type="text"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            placeholder="Enter New Book Title"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            value={newBookLink}
            onChange={(e) => setNewBookLink(e.target.value)}
            placeholder="Enter New Book Link"
            className="input input-bordered w-full max-w-xs my-1"
          />
          <input
            type="text"
            value={newBookImg}
            onChange={(e) => setNewBookImg(e.target.value)}
            placeholder="Enter New Book Image URL"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            className="btn bg-blue-100 border-amber-900 text-amber-950 mx-1 hover:bg-blue-200 hover:text-rose-50"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AddBook;
