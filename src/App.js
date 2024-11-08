import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Checkbox from "./components/checkboxes/checkbox";
// import ItemDetails from "./components/itemDetails/itemDetails";
// import SupplierDetails from "./components/supplierDetails/supplierDetails";
import Submit from "./components/submitData/submit";

// const {value, setValue} = useState(0);

function App() {
  return (
    <div>
      <Navbar />
      <Checkbox />

      {/* <ItemDetails />
      <SupplierDetails /> */}
      <Submit />
    </div>
  );
}

export default App;
