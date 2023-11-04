import axios from 'axios';

import './App.css';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState();

  const handleChange = ({target: {value, name}}) => setForm({[name]: value});

  const createAndDownloadPdf = axios.post('/create-pdf', form)

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
