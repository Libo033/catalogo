import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import SearchBar from "../other/SearchBar";

const NavigationBar = () => {
  return (
    <nav className="bg-[#79a456] fixed grid w-full h-fit z-50 border-b border-[#2b5e2c] shadow-2xl">
      <ul className="flex justify-between items-center">
        <li className="py-5">
          <Link className="text-3xl text-white font-bold px-8 sm:px-10 md:px-14" href={"/"}>
            Catalogo
          </Link>
        </li>
        <li className="hidden sm:block sm:w-full">
          <SearchBar />
        </li>
        <li className="mx-8">
          <MenuRounded sx={{ fontSize: "45px", color: "white" }} />
        </li>
      </ul>
      <div className="mx-8 pt-2 pb-3 sm:hidden ">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
