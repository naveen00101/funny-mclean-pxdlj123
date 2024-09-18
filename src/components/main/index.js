import React from "react";
import { useState } from "react";

const SearchDetails = () => {
  const [searchText, setSearchText] = useState("");
  const searchData = "";
  const getDetails = () => {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    searchData = data;
    console.log(data);
  };

  return (
    <div>
      {getDetails()}
      {searchData.map((each) => (
        <p>{each.id}</p>
      ))}
    </div>
  );
};

export default SearchDetails;
