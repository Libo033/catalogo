"use client";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (search === "") {
      router.push(`${pathname}`);
    } else {
      router.push(`${pathname}?search=${search}`);
    }

    return () => {};
  }, [search]);

  return (
    <div className="bg-transparent w-full sm:max-w-96">
      <TextField
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
        placeholder="Buscar producto"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        size="small"
        variant="outlined"
        sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
      />
    </div>
  );
};

export default SearchBar;
