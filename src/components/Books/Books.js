import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const uri = "https://agile-wildwood-07833.herokuapp.com/homepage/books/";
    axios.get(uri).then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="text-center mb-5 fs-1">BookWare's Book Warehouse</h2>
      </div>
      {books.map((book) => (
        <BookCard book={book} key={book._id}></BookCard>
      ))}
      <div className="col-md-12 text-center">
        <Link to="/inventory" className="btn btn-outline-info btn-lg m-5">
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default Books;
