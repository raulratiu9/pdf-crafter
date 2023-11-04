import axios from "axios";

import "./App.css";
import { useState } from "react";
import { saveAs } from "file-saver";

function App() {
  const [form, setForm] = useState({
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
  });

  const handleChange = ({ target: { value, name } }) =>
    setForm((prevState) => ({ ...prevState, [name]: value }));

  const createAndDownloadPdf = async () =>
    await axios
      .post("/create-pdf", form)
      .then(async () => await axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  console.log(form);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Receipt ID"
        name="receiptId"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price 1"
        name="price1"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price 2"
        name="price2"
        onChange={handleChange}
      />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
