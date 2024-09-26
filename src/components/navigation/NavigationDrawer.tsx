"use client";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

interface NavigationDrawerProps {
  onCloseDrawer: () => void;
  category: Array<string>;
}

const NavigationDrawer = ({
  onCloseDrawer,
  category,
}: Readonly<NavigationDrawerProps>) => {
  return (
    <div className="overflow-hidden py-10 px-4 md:hidden">
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
          <TextField variant="outlined" label="$ Minimo" />
          <TextField variant="outlined" label="$ Maximo" />
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
      <div className="pt-10 flex justify-center">
        <Close
          onClick={onCloseDrawer}
          sx={{
            fontSize: "42px",
            border: "2.5px solid black",
            borderRadius: "150px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default NavigationDrawer;

/* bg-[#79a45660] */
