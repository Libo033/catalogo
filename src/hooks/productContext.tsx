"use client";
import { IProductosContext, ProductCardProps } from "@/lib/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useState, useEffect, FormEvent } from "react";
import Swal from "sweetalert2";

const defaultValue: IProductosContext = {
  productos: [],
  contextError: undefined,
  load: false,
  handleCreateProduct: async () => {},
  handleEditProduct: async () => {},
  handleDeleteProduct: async () => {},
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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let searchBar = searchParams.get("search") || "";
  const router = useRouter();

  const handleCreateProduct = async (
    Event: FormEvent,
    product: ProductCardProps
  ) => {
    // AGREGAR TRY CATCH
    Event.preventDefault();

    const res = await fetch(`/api/v1/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.code === 201) {
      router.push("/admin/tablero");
    }
  };

  const handleEditProduct = async (
    Event: FormEvent,
    product: ProductCardProps
  ) => {
    Event.preventDefault();

    const res = await fetch(`/api/v1/product/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.modificado) {
      router.push("/admin/tablero");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    // AGREGAR TRY CATCH
    Swal.fire({
      title: "Borrar producto?",
      text: "Una vez borrado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/v1/product/${id}`, { method: "DELETE" });
        const data = await res.json();

        if (data.borrado) {
          setProductos(productos.filter((p) => p._id !== id));
          Swal.fire({
            title: "Borrado!",
            icon: "success",
          });
        }
      }
    });
  };

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
  }, [pathname]);

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
    <ProductContext.Provider
      value={{
        productos,
        contextError,
        load,
        handleCreateProduct,
        handleEditProduct,
        handleDeleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
