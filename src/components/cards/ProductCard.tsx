"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  id: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const ProductCard = ({
  id,
  image,
  category,
  description,
  price,
}: Readonly<ProductCardProps>) => {
  const [shared, setShared] = useState<boolean>(false);
  const [shareError, setShareError] = useState<Error | undefined>();

  const shareProduct = () => {
    const product: ShareData = {
      title: description,
      text: "",
      url: `http://192.168.0.190:3000/#${id}`,
    };

    if (navigator) {
      navigator
        .share(product)
        .then(() => {
          setShared(true);
          setInterval(() => {
            setShared(false);
          }, 6000);
        })
        .catch((err: Error) =>
          setShareError(new Error("No se pudo compartir"))
        );
    } else {
      setShareError(new Error("Dispositivo incompatible"));
    }
  };

  return (
    <article id={id} className="w-full flex flex-col bg-white rounded-lg">
      <div className="w-full p-4 rounded-lg relative">
        <Image
          className="w-full h-64 object-cover object-center flex justify-center rounded-md"
          src={image}
          alt={description}
          width={1200}
          height={1200}
        />
        <div className="absolute bg-[#11111199] rounded-md bottom-6 right-6">
          <p className="text-white text-sm font-bold px-3 py-1">
            $ {Intl.NumberFormat().format(price)}
          </p>
        </div>
      </div>
      <div className="h-full px-4 flex flex-col justify-between gap-2">
        <p className="text-[#2b5e2c] font-extrabold">{category}</p>
        <p className="font-medium h-12 text-pretty">{description}</p>
      </div>
      <div className="px-4 pt-4 pb-2">
        {shareError === undefined ? (
          <button
            onClick={() => shareProduct()}
            className={`uppercase duration-100 border w-full py-2 rounded-xl font-medium ${
              shared ? " bg-[#79a456] text-white" : ""
            }`}
          >
            COMPARTIR
          </button>
        ) : (
          <p
            className={`uppercase duration-100 border w-full py-2 text-sm bg-red-600 text-white text-center rounded-xl font-medium`}
          >
            {shareError.message}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
