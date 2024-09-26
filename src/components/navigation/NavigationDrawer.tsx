"use client";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import CategoryFilter from "../filters/CategoryFilter";
import PriceFilter from "../filters/PriceFilter";

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
      <CategoryFilter category={category} />
      <PriceFilter />
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
