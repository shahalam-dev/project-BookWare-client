import React from "react";
import { Link } from "react-router-dom";

const LowStockCard = ({ book }) => {
  return (
    <div className="col-md-12">
      <div className="card my-2 shadow">
        <div className="row align-items-center p-2">
          <div className="col-md-3 d-flex justify-content-center">
            <img src={book?.photoUrl} className="lower-card-img" alt="..." />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <p className="card-title">{book?.bookTitle}</p>
            {book?.stockQuantity > 0 && (
              <p className="card-text">
                <span className="text-success">In Stock:</span>{" "}
                {book?.stockQuantity}
              </p>
            )}
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link
              to={`/update-stock/${book?._id}`}
              className="btn btn-outline-info m-3"
            >
              Restock
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowStockCard;
