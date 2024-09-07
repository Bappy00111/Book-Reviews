import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const BookDetels = () => {
  const [book, setBook] = useState(null); // To store the matched book data
  const { id } = useParams(); // Get bookId from URL params
  console.log(id);

  useEffect(() => {
    // Fetch data from the public folder
    const fetchBooks = async () => {
      try {
        const response = await fetch("/data.json"); // Assuming the file is in public folder
        const data = await response.json();
        console.log(data);

        // Find the book that matches the bookId
        const matchedBook = data?.find((book) => book.bookId === parseInt(id));
        console.log(matchedBook);
        setBook(matchedBook); // Set the matched book to state
      } catch (error) {
        console.error("Error fetching the book data:", error);
      }
    };

    fetchBooks();
  }, [id]); // Depend on bookId so it re-fetches if the bookId changes

  return (
    <div className="grid grid-cols-2 gap-10 h-[calc(100vh-40px)]">
      <div className="col-span-1 flex justify-center items-center  bg-slate-50 h-full">
        <img className="h-96 w-96" src={book && book.image} alt="" />
      </div>
      <div className="col-span-1">
        {book ? (
          <div className="space-y-5">
            <h2 className="text-5xl font-bold">{book.bookName}</h2>
            <p>By: {book.author}</p>
            <hr />
            <p>{book.category}</p>
            <hr />
            <p className="text-base">
              <span className=" font-bold">Review</span>
              <span>{book.review}</span>
            </p>
            <p className="flex  gap-10">
              <span className="font-bold">Tag</span>
              <ul className="flex gap-4">
                {book.tags.map((tag, index) => (
                  <li className="text-green-600" key={index}>
                    #{tag}
                  </li> // map function to display each tag in <li>
                ))}
              </ul>
            </p>
            <hr />
            <p>
              Publisher : <span className="font-bold">{book.publisher}</span>
            </p>
            <p>
              Year of Publishing :{" "}
              <span className="font-bold">{book.yearOfPublishing}</span>
            </p>
            <p>
              Rating : <span className="font-bold">{book.rating}</span>
            </p>
            <div className="flex gap-6 text-base font-bold">
              <Button className="px-4  py-2 border rounded border-gray-200">
                Read
              </Button>
              <Button className="px-4  py-2 border rounded border-gray-200  text-white  bg-[#50B1C9]">
                Wishlist
              </Button>
            </div>
          </div>
        ) : (
          <p>Loading or no data found...</p>
        )}
      </div>
    </div>
  );
};

export default BookDetels;
