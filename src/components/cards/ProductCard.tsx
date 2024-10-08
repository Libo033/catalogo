"use client";
import { ProductCardProps } from "@/lib/interfaces";
import { Button, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard = ({
  _id,
  image,
  category,
  description,
  price,
  sale,
  various,
}: Readonly<ProductCardProps>) => {
  const [shareError, setShareError] = useState<Error | undefined>();

  const shareProduct = () => {
    const product: ShareData = {
      title: "Me interesa!",
      text: description,
      url: `https://catalogo-griselda.vercel.app/${_id}`,
    };

    if (navigator) {
      navigator
        .share(product)
        .then(() => console.log("Compartiendo..."))
        .catch((err: Error) =>
          setShareError(new Error("No se pudo compartir"))
        );
    } else {
      setShareError(new Error("Dispositivo incompatible"));
    }
  };

  return (
    <Link href={`/${_id}`}>
      <article
        id={_id}
        className={`pb-2 w-full flex flex-col bg-white border shadow-lg rounded-lg`}
      >
        <div className="w-full p-4 rounded-lg relative">
          <Image
            className="w-full h-80 object-cover object-center flex justify-center rounded-md"
            src={image}
            alt={description}
            width={1200}
            height={1200}
          />
          {sale ? (
            <div className="absolute bg-[#f9f971] rounded-md bottom-6 right-6">
              <p className="text-black text-sm font-bold px-3 py-1">
                OFERTA $ {price}
              </p>
            </div>
          ) : (
            <div className="absolute bg-[#11111199] rounded-md bottom-6 right-6">
              <p className="text-white text-sm font-bold px-3 py-1">
                $ {price}
              </p>
            </div>
          )}
        </div>
        <div className="h-full px-4 flex flex-col justify-between gap-2">
          <p className="text-[#2b5e2c] font-extrabold">{category}</p>
          <p className="font-medium h-12 text-pretty">{description}</p>
        </div>
        <div className="min-h-[28px] mx-4 flex gap-2 overflow-x-auto overflow-y-hidden">
          {various.map((ch, i) => (
            <Chip
              key={i + ch}
              label={ch}
              size="small"
              sx={{ backgroundColor: "#c5d86e", width: "fit-content" }}
            />
          ))}
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
