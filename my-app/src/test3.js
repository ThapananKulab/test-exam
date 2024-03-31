import React, { useState } from "react";

function NumberForm() {
  const [number, setNumber] = useState(""); // The input number from the user
  const [selection, setSelection] = useState("even"); // 'even' for even, 'odd' for odd selection
  const [table, setTable] = useState([]); // To store the multiplication table results
  const [apiResponse, setApiResponse] = useState(""); // To store the API response

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate the multiplication table based on even or odd selection
    const newTable = generateMultiplicationTable(number, selection);
    setTable(newTable);

    // Data to send to the API
    const dataToSend = { number, selection };

    try {
      // Fetch request to the API endpoint "/check-selection"
      const response = await fetch("/check-selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();

      // Update the state with the API response
      setApiResponse(data.message); // Assuming the API sends back a message
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  // Function to generate multiplication table based on even or odd selection
  const generateMultiplicationTable = (num, select) => {
    let results = [];
    for (let i = select === "even" ? 2 : 1; i <= 12; i += 2) {
      results.push(`${num} x ${i} = ${num * i}`);
    }
    return results;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>เลือกคู่หรือคี่:</label>
          <select
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
          >
            <option value="even">คู่</option>
            <option value="odd">คี่</option>
          </select>
        </div>
        <div>
          <label>กรอกเลข:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">ส่งข้อมูล</button>
        </div>
      </form>
      {table.length > 0 && (
        <div>
          <h2>ผลลัพธ์การคูณ:</h2>
          <ul>
            {table.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
      {apiResponse && <p>{apiResponse}</p>} {/* Display the API response */}
    </div>
  );
}

export default NumberForm;
