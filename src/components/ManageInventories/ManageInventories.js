import axios from "axios";
import React, { useEffect, useState } from "react";
import InventoryCard from "../InventoryCard/InventoryCard";

const ManageInventories = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const uri = "https://agile-wildwood-07833.herokuapp.com/books";
    axios.get(uri).then((res) => setBooks(res.data));
  }, []);
  return (
    <div className="row">
      {books.map((book) => (
        <InventoryCard key={book._id} book={book}></InventoryCard>
      ))}
    </div>
  );
};

export default ManageInventories;
