import React from "react";
import { FaStar } from "react-icons/fa";

const SingelBooks = ({ book }) => {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className=" bg-white shadow-lg border rounded-lg overflow-hidden">
      {/* Image */}
     <div className="h-72 m-10 flex justify-center  items-center bg-gray-100 rounded-xl">
     <img
        className="w-32 h-32   object-cover object-center"
        src={image}
        alt={book.bookName}
      />
     </div>

      <div className="px-6">
        {/* Buttons */}
        <div className="flex gap-4 my-4">
          <button className="text-green-500 bg-gray-100 py-2 px-6 rounded-3xl font-bold">
            Buy Now
          </button>
          <button className="text-green-500 bg-gray-100 py-2 px-6 rounded-3xl font-bold">
            Details
          </button>
        </div>

        {/* Book Name */}
        <div className=" py-4">
          <h3 className="text-lg font-bold mb-2">{bookName}</h3>
          {/* Author */}
          <p className="text-gray-700 text-sm mb-2">By: {author}</p>
          <hr className="py-1" />
          {/* Category */}
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm mb-2">Fiction</p>

            {/* Rating with Icon */}
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" />
              <span>{book.rating} / 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelBooks;
