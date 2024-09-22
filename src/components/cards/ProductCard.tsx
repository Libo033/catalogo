import Image from "next/image";
import React from "react";

interface ProductCardProps {
  id: string;
  imagen: string;
  categoria: string;
  descripcion: string;
  precio: number;
}

const ProductCard = ({
  id,
  imagen,
  categoria,
  descripcion,
  precio,
}: Readonly<ProductCardProps>) => {
  return (
    <article className="w-full bg-white rounded-lg">
      <div className="w-full p-4 rounded-lg relative">
        <Image
          className="w-full h-64 object-cover object-center flex justify-center rounded-md"
          src={imagen}
          alt={descripcion}
          width={1200}
          height={1200}
        />
        <div className="absolute bg-[#11111199] rounded-md bottom-6 right-6">
          <p className="text-white text-sm font-bold px-3 py-1">
            $ {Intl.NumberFormat().format(precio)}
          </p>
        </div>
      </div>
      <div className="h-full px-4 flex flex-col justify-between gap-2">
        <p className="text-[#2b5e2c] font-extrabold">{categoria}</p>
        <p className="font-medium h-12 text-pretty">{descripcion}</p>
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
