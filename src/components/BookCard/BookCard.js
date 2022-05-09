import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3 shadow">
        <img src={book?.photoUrl} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <h5 className="card-title fs-3">{book?.bookTitle}</h5>
          <p className="card-text small">Author: {book?.authorName}</p>
          <p className="card-text small">Supplier: {book?.publisher}</p>
          <p className="mb-3 fs-6 small">Price: {book?.bookPrice} BDT</p>
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
          <Link
            to={`update-stock/${book?._id}`}
            className="btn btn-outline-info btn-lg"
          >
            Restock
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
