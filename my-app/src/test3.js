import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function NumberForm() {
  const [number, setNumber] = useState("");
  const [selection, setSelection] = useState("even");
  const [table, setTable] = useState([]);
  const [apiResponse, setApiResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTable = generateMultiplicationTable(number, selection);
    setTable(newTable);

    const dataToSend = { number, selection };

    try {
      const response = await fetch("/check-selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();

      setApiResponse(data.message);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const generateMultiplicationTable = (num, select) => {
    let results = [];
    for (let i = select === "even" ? 2 : 1; i <= 12; i += 2) {
      results.push(`${num} x ${i} = ${num * i}`);
    }
    return results;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>เลือกคู่หรือคี่:</label>
          <select
            className="form-control"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
          >
            <option value="even">คู่</option>
            <option value="odd">คี่</option>
          </select>
        </div>
        <div className="form-group">
          <label>กรอกเลข:</label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            ส่งข้อมูล
          </button>
        </div>
      </form>
      {table.length > 0 && (
        <div>
          <h2>ผลลัพธ์การคูณ:</h2>
          <ul className="list-group">
            {table.map((result, index) => (
              <li key={index} className="list-group-item">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {apiResponse && <p>{apiResponse}</p>}
    </div>
  );
}

export default NumberForm;
