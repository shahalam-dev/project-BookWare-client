import axios from "axios";
import React, { useEffect, useState } from "react";
import LowStockCard from "../LowStockCard/LowStockCard";

const LowStock = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const uri = "http://localhost:5000/lowstock";
    axios.get(uri).then((res) => setBooks(res.data));
  }, []);
  return (
    <div className="row my-5 py-5 align-items-center">
      <div className="col-md-12 text-center py-5">
        <h2 className="font-monospace display-5">Low Stock Items.</h2>
      </div>
      <div className="col-md-6 py-3">
        <img src="https://i.ibb.co/Dt2Rr8x/stock-market.png" alt="" />
      </div>
      <div className="col-md-6 py-3">
        <div className="row">
          {books.map((book) => (
            <LowStockCard key={book?._id} book={book}></LowStockCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowStock;
