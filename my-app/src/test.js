import React, { useRef } from "react";

function MyForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Data Entered: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Enter some data" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
