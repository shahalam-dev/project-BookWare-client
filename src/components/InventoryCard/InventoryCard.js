import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const InventoryCard = ({ book }) => {
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const uri = `http://localhost:5000/book/${id}`;
      axios.delete(uri).then((res) => console.log(res));
      window.location.reload();
    }
  };
  return (
    <div className="col-md-12">
      <div className="card my-5 shadow">
        <div className="card-body p-5">
          <div className="row">
            <div className="col-md-3">
              <img
                src={book?.photoUrl}
                className="inventory-card-img"
                alt="..."
              />
            </div>
            <div className="col-md-7 py-3">
              <h5 className="card-title">{book?.bookTitle}</h5>
              <p className="card-text lead">Author: {book?.authorName}</p>
              <p className="card-text lead">Supplier: {book?.publisher}</p>
              <p className="card-text small">Price: ${book?.bookPrice}</p>
              {book?.stockQuantity == 0 && (
                <p className="card-text display-6">
                  <span className="text-danger">Out Of Stock</span>
                </p>
              )}
              {book?.stockQuantity > 0 && (
                <p className="card-text display-6">
                  <span className="text-success">In Stock:</span>{" "}
                  {book?.stockQuantity}
                </p>
              )}
            </div>
            <div className="col-md-2 d-flex flex-md-column flex-sm-row justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-outline-danger btn-lg m-3"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
              <Link
                to={`/update-stock/${book?._id}`}
                className="btn btn-outline-info btn-lg m-3"
              >
                Restock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
