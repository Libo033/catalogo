import ProductCardAdmin from "@/components/cards/ProductCardAdmin";
import { ProductCardProps } from "@/lib/interfaces";
import Link from "next/link";
import React from "react";

const prods: Array<ProductCardProps> = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg",
    category: "Perfumeria",
    description: "Perfume 123",
    price: 10000,
    sale: false,
    various: ["Amaderado"],
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1715262308/07-catalogo-gri/ounthzvrsfniejttqadi.jpg",
    category: "Productos",
    description: "Crema de planta",
    price: 10000,
    sale: false,
    various: [],
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg",
    category: "Ropa Interior",
    description: "Ropa 123456",
    price: 9999,
    sale: true,
    various: ["Talle M"],
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1715262308/07-catalogo-gri/ounthzvrsfniejttqadi.jpg",
    category: "Perfumeria",
    description: "Perfume 999",
    price: 119999,
    sale: true,
    various: ["Citrico"],
  },
];

const page = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
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
          {prods.map((p) => (
            <ProductCardAdmin
              key={p.id + p.image}
              id={p.id}
              image={p.image}
              category={p.category}
              description={p.description}
              price={p.price}
              sale={p.sale}
              various={p.various}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;
