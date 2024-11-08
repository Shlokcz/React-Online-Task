import React from "react";
import Styles from "./itemDetails.module.css";

const itemsRow1 = [
  {
    key: "01",
    name: "Item Name",
    placeholder: "Enter your name",
    limit: "Max 50 characters",
  },
  {
    key: "02",
    name: "Quantity",
    placeholder: "Enter Quantity",
    limit: "Numeric Value",
  },
];

const itemsRow2 = [
  {
    key: "03",
    name: "Unit Price",
    placeholder: "Enter Unit Price",
    limit: "Numeric Value (USD)",
  },
  {
    key: "04",
    name: "Date of Submission",
    placeholder: "Select Date",
    limit: "Format: MM/DD/YYYY",
  },
];

function ItemDetails() {
  return (
    <div className={Styles.itemDetails}>
      <h1>Item Details</h1>
      <div className={Styles.items}>
        <div className={Styles.itemsRow1}>
          {itemsRow1.map((item) => (
            <div key={item.key} className={Styles.oneItem}>
              <p className={Styles.para}>{item.name}</p>
              <input type="text" placeholder={item.placeholder} />
              <p className={Styles.smallDesc}>{item.limit}</p>
            </div>
          ))}
        </div>
        <div className={Styles.itemsRow2}>
          {itemsRow2.map((item) => (
            <div key={item.key} className={Styles.oneItem}>
              <p className={Styles.para}>{item.name}</p>
              <input type="text" placeholder={item.placeholder} />
              <p className={Styles.smallDesc}>{item.limit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
