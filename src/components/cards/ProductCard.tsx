"use client";
import { Button, Chip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  id: string;
  image: string;
  category: string;
  description: string;
  price: number;
  sale: boolean;
  various: Array<string>;
}

const ProductCard = ({
  id,
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
      url: `http://192.168.0.190:3000/#${id}`,
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
    <article
      id={id}
      className="w-full flex flex-col bg-white border shadow-lg rounded-lg"
    >
      <div className="w-full p-4 rounded-lg relative">
        <Image
          className="w-full h-64 object-cover object-center flex justify-center rounded-md"
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
            <p className="text-white text-sm font-bold px-3 py-1">$ {price}</p>
          </div>
        )}
      </div>
      <div className="h-full px-4 flex flex-col justify-between gap-2">
        <p className="text-[#2b5e2c] font-extrabold">{category}</p>
        <p className="font-medium h-12 text-pretty">{description}</p>
      </div>
      <div className="min-h-[28px] mx-4 grid grid-flow-col gap-2 overflow-x-auto overflow-y-hidden">
        {various.map((ch, i) => (
          <Chip
            key={i + ch}
            label={ch}
            size="small"
            sx={{ backgroundColor: "#c5d86e", width: "fit-content" }}
          />
        ))}
      </div>
      <div className="px-4 pt-4 pb-2">
        {shareError === undefined ? (
          <Button
            onClick={shareProduct}
            sx={{
              color: "#fff",
              borderColor: "#2b5e2c",
              backgroundColor: "#2b5e2c",
            }}
            fullWidth
            variant="contained"
          >
            COMPARTIR
          </Button>
        ) : (
          <Button fullWidth variant="contained" color="error">
            {shareError.message}
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
