import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <InputBase placeholder={"Search..."} startAdornment={<SearchIcon />} />
  );
};

export default SearchInput;
