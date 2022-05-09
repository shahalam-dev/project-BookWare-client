import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import InventoryCard from "../InventoryCard/InventoryCard";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const uri = `https://agile-wildwood-07833.herokuapp.com/my-items/?email=${user.email}`;
      const { data } = await axios.get(uri, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setBooks(data);
    };

    getMyItems();
  }, [user.email]);
  return (
    <div>
      {!books.length && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "60vh" }}
        >
          <h2 className="display-3">You Didn't add any item to inventory.</h2>
        </div>
      )}
      {books.length > 0 &&
        books.map((book) => (
          <InventoryCard key={book?._id} book={book}></InventoryCard>
        ))}
    </div>
  );
};

export default MyItems;
