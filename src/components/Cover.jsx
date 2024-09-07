import React from "react";
import Button from "./Button";

const Cover = () => {
  return (
    <div className="grid grid-cols-3 p-10">
      <div className="col-span-2 flex flex-col items-center justify-center">
        <div className="space-y-5 ">
          <h1 className="text-5xl font-bold tracking-wide">
            Books to freshen up your bookshelf
          </h1>
          <Button className="bg-[#23BE0A] text-white px-6 py-2 rounded-lg font-bold tracking-wide">
            View The List
          </Button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="https://sphery.ch/wp-content/uploads/2021/05/book-01-free-img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cover;
