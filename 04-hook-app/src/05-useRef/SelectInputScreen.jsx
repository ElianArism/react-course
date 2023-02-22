import React, { useRef } from "react";

export const SelectInputScreen = () => {
  const inputRef = useRef();

  return (
    <div>
      <div className="mb-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search something..."
          className="form-control"
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={() => inputRef.current.select()}
      >
        Select input text
      </button>
    </div>
  );
};
