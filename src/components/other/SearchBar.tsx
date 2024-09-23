import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-transparent pt-6 w-full sm:w-96">
      <TextField
        fullWidth
        autoComplete="off"
        placeholder="Buscar producto"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
      />
    </div>
  );
};

export default SearchBar;
