import { Button, TextField } from "@mui/material";
import React from "react";

const PriceFilter = () => {
  return (
    <div className="pt-8 flex flex-col">
      <p className="text-2xl font-bold underline">Precio</p>
      <div className="pt-2 pb-3 flex gap-3">
        <TextField fullWidth variant="outlined" label="$ Minimo" />
        <TextField fullWidth variant="outlined" label="$ Maximo" />
      </div>
      <Button
        sx={{
          color: "#fff",
          borderColor: "#2b5e2c",
          backgroundColor: "#2b5e2c",
        }}
        variant="contained"
      >
        Filtrar
      </Button>
    </div>
  );
};

export default PriceFilter;
