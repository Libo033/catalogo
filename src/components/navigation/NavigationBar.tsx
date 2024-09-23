import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import SearchBar from "../other/SearchBar";

const NavigationBar = () => {
  return (
    <nav className="bg-[#79a456] fixed grid w-full h-fit pb-3 z-50 border-b border-[#2b5e2c] shadow-2xl">
      <ul className="flex justify-between items-center">
        <li className="py-4">
          <Link className="text-3xl text-white font-bold pl-8" href={"/"}>
            Catalogo
          </Link>
        </li>
        <li className="mx-8">
          <MenuRounded sx={{ fontSize: "45px", color: "white" }} />
        </li>
      </ul>
      <div className="mx-8 pt-2">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
