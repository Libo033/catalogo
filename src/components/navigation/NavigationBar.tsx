"use client";
import { FilterAlt, MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import React, { Suspense, useCallback, useState } from "react";
import SearchBar from "../other/SearchBar";
import NavigationDrawer from "./NavigationDrawer";
import { Dialog, Drawer } from "@mui/material";
import FilterBox from "../filters/FilterBox";
import { usePathname } from "next/navigation";

const categoryMock = [
  "Perfumeria",
  "Ropa Interior",
  "Cremas",
  "Ofertas",
  "Cabello",
];

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [toggleDialog, setToggleDialog] = useState<boolean>(false);
  const pathname = usePathname();

  const onOpenDrawer = useCallback(() => {
    setToggleDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setToggleDrawer(false);
  }, []);

  const onOpenDialog = useCallback(() => {
    setToggleDialog(true);
  }, []);

  const onCloseDialog = useCallback(() => {
    setToggleDialog(false);
  }, []);

  return (
    <>
      {pathname !== "/admin" && (
        <div className="bg-[#79a456] fixed w-full z-50 shadow-xl">
          <nav className="mx-auto grid max-w-screen-2xl w-full h-fit border-b border-[#2b5e2c]">
            <ul className="flex justify-between items-center">
              <li className="py-5">
                <Link
                  className="text-3xl text-white font-bold px-8 sm:px-10 md:px-14"
                  href={"/"}
                >
                  Catalogo
                </Link>
              </li>
              <li className="hidden sm:block sm:w-full">
                <SearchBar />
              </li>

              {/* block --- Proximamente */}
              <li className="hidden mx-8 md:hidden">
                <MenuRounded
                  onClick={onOpenDrawer}
                  sx={{ fontSize: "45px", color: "white", cursor: "pointer" }}
                />
              </li>

              <li className="hidden mx-8 ">
                {/* md:block --- Proximamente */}
                <FilterAlt
                  onClick={onOpenDialog}
                  sx={{ fontSize: "45px", color: "white", cursor: "pointer" }}
                />
              </li>
            </ul>
            <div className="mx-8 pt-2 pb-3 sm:hidden ">
              <SearchBar />
            </div>
            <Drawer anchor="top" open={toggleDrawer} onClose={onCloseDrawer}>
              {/*<NavigationDrawer
                onCloseDrawer={onCloseDrawer}
                category={categoryMock}
              />*/}
            </Drawer>
            <Dialog open={toggleDialog} onClose={onCloseDialog}>
              {/*<FilterBox
                onCloseDialog={onCloseDialog}
                category={categoryMock}
              />*/}
            </Dialog>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
