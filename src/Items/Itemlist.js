import React, { useState } from "react";
import "./Itemlist.css";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterSidebar from "../components/FilterSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const Itemlist = (props) => {
  const [open, setopen] = useState(false);
  const openfilter = () => {
    setopen(true);
  };
  const closefilter = () => {
    setopen(false);
  };
  if (props)
    if (props.items.length === 0) {
      return (
        <div className="text-center mt-5">
          <h2>No items found.</h2>
        </div>
      );
    }
  return (
    <div className="position-relative">
      {props.filter && (
        <button
          className="btn btn-primary position-sticky d-flex align-items-center justify-content-center shadow-lg"
          style={{ top: "280px", left: "20px", zIndex: "10" }}
          onClick={openfilter}
        >
          <FontAwesomeIcon icon={faFilter} />
          &emsp; Filter
        </button>
      )}
      {open && <FilterSidebar show={open} onClick={closefilter} />}
      <h1 className="text-center">{props.heading}</h1>
      <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center gap-3 mt-5">
        {props.items.map((curr) => (
          <Item
            key={curr.id}
            id={curr.id}
            name={curr.name}
            price={curr.sellprice}
            details={curr.description}
            age={curr.age}
            image={curr.image}
            location={curr.location}
            ondelete={props.ondeleteitem}
            creator={curr.creator}
          />
        ))}
      </div>
    </div>
  );
};

export default Itemlist;
