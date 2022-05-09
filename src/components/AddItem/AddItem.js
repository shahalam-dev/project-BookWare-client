import axios from "axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.config";

const AddItem = () => {
  const bookTitle = useRef();
  const authorName = useRef();
  const photoUrl = useRef();
  const publisher = useRef();
  const stockQuantity = useRef();
  const bookPrice = useRef();
  const [user] = useAuthState(auth);
  console.log(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uri = "http://localhost:5000/book";
    const bookData = {
      bookTitle: bookTitle.current.value,
      authorName: authorName.current.value,
      photoUrl: photoUrl.current.value,
      publisher: publisher.current.value,
      stockQuantity: stockQuantity.current.value,
      bookPrice: bookPrice.current.value,
      inventoryManager: user.email,
    };

    // console.log(bookData);
    if (user.email) {
      axios.post(uri, bookData).then((res) => {
        toast("Item added to inventory.");
        e.target.reset();
      });
      console.log(user.email);
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h2 className="display-5 my-5">Add New Item To Inventory.</h2>
      </div>
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="bookTitle" class="form-label mb-2">
              Book Title
            </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Book Title"
              ref={bookTitle}
              id="bookTitle"
            />
          </div>
          <div className="mb-3">
            <label for="authorName" class="form-label mb-2">
              Author Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Author Name"
              ref={authorName}
              id="authorName"
            />
          </div>
          <div className="mb-3">
            <label for="imgUrl" class="form-label mb-2">
              Cover Photo URL
            </label>
            <input
              required
              type="url"
              className="form-control"
              placeholder="Book's Cover Photo URL"
              ref={photoUrl}
              id="imgUrl"
            />
          </div>
          <div className="mb-3">
            <label for="publisher" class="form-label mb-2">
              Publisher / Supplier
            </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="publisher"
              ref={publisher}
              id="publisher"
            />
          </div>
          <div className="mb-3">
            <label for="StockQuantity" class="form-label mb-2">
              Stock Quantity
            </label>
            <input
              required
              type="number"
              className="form-control"
              placeholder="stock quantity"
              ref={stockQuantity}
              id="StockQuantity"
            />
          </div>
          <div className="mb-3">
            <label for="bookPrice" class="form-label mb-2">
              Book Price
            </label>
            <input
              required
              type="number"
              className="form-control"
              placeholder="Book's Price"
              ref={bookPrice}
              id="bookPrice"
            />
          </div>

          <button type="submit" className="btn btn-info btn-lg my-5">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
