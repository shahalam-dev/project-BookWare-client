import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateStock = () => {
  const [book, setBook] = useState({});
  const [update, setUpdate] = useState(0);
  const newStockCount = useRef();
  const params = useParams();
  const { id } = params;

  const handleStock = (e) => {
    e.preventDefault();
    const stockCount = newStockCount.current.value;
    if (stockCount) {
      const uri = `https://agile-wildwood-07833.herokuapp.com/book/${id}`;
      axios.put(uri, { quantity: stockCount }).then((res) => {
        setUpdate(1);
        toast("Stock Updated.");
        e.target.reset();
      });
    } else {
      toast("Enter Stock Quantity.");
    }
  };

  const handleDelivered = () => {
    const stockCount = book?.stockQuantity - 1;
    if (stockCount >= 0) {
      const uri = `https://agile-wildwood-07833.herokuapp.com/book/${id}`;
      axios.put(uri, { quantity: `${stockCount}` }).then((res) => {
        toast("One Item delivered.");
        setUpdate(1);
      });
    }
  };

  useEffect(() => {
    const uri = `https://agile-wildwood-07833.herokuapp.com/book/${id}`;

    axios.get(uri).then((res) => {
      setBook(res.data);
      setUpdate(0);
    });
  }, [id, update]);

  return (
    <div className="row align-items-center py-5">
      <div className="col-md-4">
        <img src={book?.photoUrl} className="img-fluid" alt="..." />
      </div>
      <div className="col-md-8 p-5">
        <h2 className="display-4 mb-5">{book?.bookTitle}</h2>
        <h3 className="fs-5">Author: {book?.authorName}</h3>
        <h3 className="fs-5">Supplier: {book?.publisher}</h3>
        <h3 className="fs-5">Price: {book?.bookPrice}</h3>
        {book?.stockQuantity == 0 && (
          <h3 className="display-5 text-danger">Out Of Stock</h3>
        )}
        {book?.stockQuantity > 0 && (
          <h3 className="display-5 text-success">
            In Stock: {book?.stockQuantity}
          </h3>
        )}
        <form onSubmit={handleStock}>
          <input
            type="number"
            className="form-control my-3"
            placeholder="Update Stock"
            name="quantity"
            ref={newStockCount}
          />
          <button type="submit" className="btn btn-outline-info btn-lg">
            Update stock
          </button>
        </form>
        <button
          type="submit"
          onClick={handleDelivered}
          className="btn btn-outline-info btn-lg my-4"
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default UpdateStock;
