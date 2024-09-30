"use client";
import ProductCard from "@/components/cards/ProductCard";
import Image from "next/image";
import cartCat from "../images/cart-cat.png";
import { ProductCardProps } from "@/lib/interfaces";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [productos, setProductos] = useState<Array<ProductCardProps>>(prods);
  const searchParams = useSearchParams();
  let searchBar = searchParams.get("search") || "";

  useEffect(() => {
    searchBar === ""
      ? setProductos(prods)
      : setProductos(
          prods.filter((p) =>
            p.description.toLowerCase().includes(searchBar.toLowerCase())
          )
        );
    return () => {};
  }, [searchBar]);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="pt-[137px] px-8 sm:pt-[76px] md:px-6">
        <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
          {productos.length > 0 ? (
            productos.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
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
          )}
        </section>
      </div>
    </div>
  );
}
