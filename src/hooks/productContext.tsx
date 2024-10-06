"use client";
import { IProductosContext, ProductCardProps } from "@/lib/interfaces";
import { useSearchParams } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const defaultValue: IProductosContext = {
  productos: [],
  contextError: undefined,
  load: false,
};

export const ProductContext: React.Context<IProductosContext> =
  createContext(defaultValue);

export const ProductContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [contextProductos, setContextProductos] = useState<
    Array<ProductCardProps>
  >([]);
  const [load, setLoad] = useState<boolean>(false);
  const [productos, setProductos] = useState<Array<ProductCardProps>>([]);
  const [contextError, setContextError] = useState<Error | undefined>();
  const searchParams = useSearchParams();
  let searchBar = searchParams.get("search") || "";

  useEffect(() => {
    fetch(`/api/v1/product`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setContextProductos(data.productos);
          setProductos(data.productos);
          setLoad(true);
        } else {
          throw new Error("No se pudieron cargar los productos.");
        }
      })
      .catch((error) => {
        setLoad(true);
        if (error instanceof Error) {
          setContextError(error);
        } else {
          setContextError(new Error("No se pudieron cargar los productos."));
        }
      });
  }, []);

  useEffect(() => {
    searchBar === ""
      ? setProductos(contextProductos)
      : setProductos(
          contextProductos.filter((p) =>
            p.description.toLowerCase().includes(searchBar.toLowerCase())
          ) || []
        );
    return () => {};
  }, [searchBar]);

  return (
    <ProductContext.Provider value={{ productos, contextError, load }}>
      {children}
    </ProductContext.Provider>
  );
};
