import axios from "axios";
import React, { useEffect, useState } from "react";

const Summary = () => {
  const [data, setData] = useState([]);

  const totalItems = data.length;
  function tStock() {
    let sum = 0;
    data.forEach((e) => (sum += e.stockQuantity));
    return sum;
  }
  const totalStock = tStock();

  function tValue() {
    let sum = 0;
    data.forEach((e) => (sum += e.stockQuantity * e.bookPrice));
    return sum;
  }
  const totalValue = tValue();

  useEffect(() => {
    const uri = "https://agile-wildwood-07833.herokuapp.com/books";
    axios.get(uri).then((res) => setData(res.data));
  }, []);
  return (
    <div className="row my-5 py-5 text-center">
      <div className="col-md-12 my-5">
        <h2 className="font-monospace display-5">Inventory At A Glance.</h2>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <p className="display-5">{totalItems}</p>
            <p className="card-text">Total Category</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <p className="display-5">{totalStock}</p>
            <p className="card-text">Total Stock Items</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <p>
              <span className="display-5">{totalValue}</span>
              <span className="small"> BDT</span>
            </p>
            <p className="card-text">Total Inventory Value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
