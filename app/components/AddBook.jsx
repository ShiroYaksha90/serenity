"use client";

import { useState } from "react";

const AddBook = ({refreshBooks}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLink, setNewBookLink] = useState("");
  const [newBookImg, setNewBookImg] = useState("");

  const handleSubmitNewBook = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/books/`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: newBookTitle,
            link: newBookLink,
            img: newBookImg
        })
    })
    if(res.ok){
        setNewBookTitle("");
        setModalOpen(false);
        refreshBooks();
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
            onClick={() => setModalOpen(false)}
          >
            x
          </button>
          <h3 className="text-2xl font-bold">Add Book</h3>
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
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            value={newBookImg}
            onChange={(e) => setNewBookImg(e.target.value)}
            placeholder="Enter New Book Image URL"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary" type="submit">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AddBook;
