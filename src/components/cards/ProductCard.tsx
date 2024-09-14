import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <article className="w-full bg-white rounded-lg">
      <div className="w-full p-4 rounded-lg">
        <Image
          className="w-full h-56 object-cover object-center flex justify-center rounded-md"
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1715262308/07-catalogo-gri/ounthzvrsfniejttqadi.jpg"
          }
          alt="producto"
          width={1200}
          height={1200}
        />
      </div>
      <div className="h-full px-4 flex flex-col justify-between gap-2">
        <p className="text-[#2b5e2c] font-extrabold">Perfumeria</p>
        <p className="font-medium h-12 text-pretty">
          Perfume super duper ultra maximun olor epico las 32hs del dia
        </p>
      </div>
      <div className="px-4 pt-4 pb-2">
        <button className="uppercase border w-full py-2 rounded-xl font-medium">
          compartir
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
