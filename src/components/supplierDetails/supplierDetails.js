import React from "react";
import Styles from "./supplierDetails.module.css";

const supplierRow1 = [
  {
    key: "01",
    name: "Supplier Name",
    placeholder: "Enter Supplier name",
    limit: "Max 50 characters",
  },
  {
    key: "02",
    name: "City",
    placeholder: "Enter City",
    limit: "Max 50 characters",
  },
];

const supplierRow2 = [
  {
    key: "03",
    name: "Company Name",
    placeholder: "Enter Company name",
    limit: "Max 50 characters",
  },
  {
    key: "04",
    name: "Email Address",
    placeholder: "Enter Email address",
    limit: "Valid Email format",
  },
];

function SupplierDetails() {
  return (
    <div className={Styles.supplierDetails}>
      <h1>Supplier Details</h1>
      <div className={Styles.supplier}>
        <div className={Styles.supplierRow1}>
          {supplierRow1.map((item) => (
            <div key={item.key} className={Styles.oneItem}>
              <p>{item.name}</p>
              <input type="text" placeholder={item.placeholder} />
              <p className={Styles.smallDesc}>{item.limit}</p>
            </div>
          ))}
          <div className={Styles.oneItem}>
            <p>Country</p>
            <input type="dropdown" placeholder="Select the Country from the list"/>
            <p className={Styles.smallDesc}>Select Country from the List</p>
          </div>
        </div>
        <div className={Styles.supplierRow2}>
          {supplierRow2.map((item) => (
            <div key={item.key} className={Styles.oneItem}>
              <p>{item.name}</p>
              <input type="text" placeholder={item.placeholder} />
              <p className={Styles.smallDesc}>{item.limit}</p>
            </div>
          ))}
          <div className={Styles.oneItem}>
            <p>State</p>
            <input type="dropdown" placeholder="Select the State from the list"/>
            <p className={Styles.smallDesc}>Select State from the List</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierDetails;
