import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

interface DialogFilterProps {
  onCloseDialog: () => void;
  category: Array<string>;
}

const DialogFilter = ({
  onCloseDialog,
  category,
}: Readonly<DialogFilterProps>) => {
  return (
    <div className="max-w-[510px] p-6">
      <div className="flex flex-col">
        <p className="text-2xl font-bold underline">Categorias</p>
        <div className="pt-2 flex flex-wrap gap-3">
          {category.map((cat) => (
            <Link
              href={`/${cat}`}
              className="text-lg text-white font-medium bg-[#6a9ea999] w-fit px-5 border border-[#6a9ea9] rounded-lg"
              key={cat}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
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
      <div className="absolute right-1 top-1">
        <Close
          onClick={onCloseDialog}
          sx={{
            fontSize: "27px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default DialogFilter;
