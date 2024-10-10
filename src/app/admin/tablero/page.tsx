"use client";
import ProductCardAdmin from "@/components/cards/ProductCardAdmin";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import cartCat from "../../../images/cart-cat.png";
import { Alert, AlertTitle, Skeleton } from "@mui/material";
import { ProductContext } from "@/hooks/productContext";

const page = () => {
  const { productos, load, contextError } = useContext(ProductContext);

  return (
    <div className="mx-auto max-w-screen-2xl">
      {contextError && (
        <Alert
          className="absolute w-80 bottom-10 left-[50%] translate-x-[-50%]"
          severity="error"
        >
          <AlertTitle>Error</AlertTitle>
          {contextError.message}
        </Alert>
      )}
      <div className="pt-[137px] px-8 sm:pt-[76px] md:px-6">
        <div className="pt-4">
          <Link
            className="flex items-center gap-2 underline text-blue-600"
            href={"/admin/tablero/producto"}
          >
            Nuevo producto
          </Link>
        </div>
        <section className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
          {load ? (
            productos.length > 0 ? (
              productos.map((p) => (
                <ProductCardAdmin
                  key={p._id}
                  _id={p._id}
                  image={p.image}
                  category={p.category}
                  description={p.description}
                  price={p.price}
                  sale={p.sale}
                  various={p.various}
                />
              ))
            ) : (
              <div className="pt-24 col-span-6 flex flex-col items-center gap-3 md:pt-36">
                <Image src={cartCat} alt="gato" width={100} height={100} />
                <p className="text-pretty text-center text-xl font-medium">
                  No hay nada aqui
                </p>
              </div>
            )
          ) : (
            <>
              <Skeleton variant="rounded" sx={{ height: "522px" }} />
              <Skeleton variant="rounded" sx={{ height: "522px" }} />
              <Skeleton variant="rounded" sx={{ height: "522px" }} />
              <Skeleton variant="rounded" sx={{ height: "522px" }} />
              <Skeleton variant="rounded" sx={{ height: "522px" }} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default page;
