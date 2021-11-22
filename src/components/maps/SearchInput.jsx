import React from "react";

const SearchInput = ({ipS, handleInputChange, handleSubmit}) => {

  const handleInputSubmit = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <input
        // pattern="/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/"
          type="text"
          name="ipS"
          value={ipS}
          onChange={handleInputChange}
          placeholder="ip..."
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchInput;