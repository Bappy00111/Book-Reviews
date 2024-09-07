import React, { useEffect, useState } from "react";
import SingelBooks from "./SingelBooks";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Books</h1>
      <div className="py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <SingelBooks key={book.id} book={book}></SingelBooks>
        ))}
      </div>
    </div>
  );
};

export default Books;
