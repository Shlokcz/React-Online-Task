import React, { useState } from "react";
import Styles from "./checkbox.module.css";
import ItemDetails from "../itemDetails/itemDetails";
import SupplierDetails from "../supplierDetails/supplierDetails";

function Checkbox() {
    var {itemvalue, setItemvalue} = useState("false");
  
  //   var { suppliervalue, setSuppliervalue} = useState('false');

  function handleItemClick() {
    setItemvalue = "true";
    // setSuppliervalue = 'false'
  };

  function handleSupplierClick() {
    // setSuppliervalue = 'true'
    setItemvalue = "false";
  };

  console.log(itemvalue);
  //   console.log(suppliervalue);

  return (
    <div className={Styles.checkbox}>
      <div className={Styles.checkboxItem}>
        <button onClick={handleItemClick}>Item</button>
        <button onClick={handleSupplierClick}>Supplier</button>
      </div>
      <div>{itemvalue ? <ItemDetails /> : <SupplierDetails />}</div>
    </div>
  );
}

export default Checkbox;
