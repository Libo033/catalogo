"use client";
import { ProductCardProps } from "@/lib/interfaces";
import { Button, Chip, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const [producto, setProducto] = useState<ProductCardProps>();
  const [shareError, setShareError] = useState<Error | undefined>();

  const shareProduct = () => {
    const product: ShareData = {
      title: "Me interesa!",
      url: `https://catalogo-griselda.vercel.app/${producto?._id}`,
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

  useEffect(() => {
    fetch(`/api/v1/product/${params.id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) setProducto(data.producto);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="pt-[137px] px-8 sm:pt-[76px] md:px-48 lg:px-32">
        <div className="pt-4">
          <Link
            className="flex items-center gap-2 underline text-blue-600"
            href={"/"}
          >
            Volver
          </Link>
        </div>
      </div>
      <div className="pt-6 md:h-[78vh] md:px-48 lg:flex lg:items-center lg:px-20">
        <div className="px-4 w-full h-fit md:px-0 lg:w-1/2 lg:flex lg:justify-center">
          {producto ? (
            <Image
              className="flex max-h-[390px] border rounded-lg shadow-sm object-cover sm:max-h-[600px] md:max-h-[900px] md:h-[540px] lg:h-[480px] lg:w-[480px]"
              src={producto.image}
              alt={producto.description}
              width={2000}
              height={2000}
              priority
            />
          ) : (
            <Skeleton
              variant="rounded"
              className="h-[390px] sm:h-[600px] md:h-[540px]"
            />
          )}
        </div>
        <div className="px-4 pt-4 flex flex-col gap-4 sm:px-8">
          {producto ? (
            <p className="text-[#2b5e2c] font-extrabold text-xl sm:text-2xl">
              {producto.category}
            </p>
          ) : (
            <Skeleton variant="rounded" sx={{ height: "28px" }} />
          )}
          {producto ? (
            <p className="text-2xl sm:text-4xl">{producto.description}</p>
          ) : (
            <Skeleton variant="rounded" sx={{ height: "32px" }} />
          )}
          {producto ? (
            <div className="flex flex-wrap gap-2">
              {producto.various.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  size="small"
                  sx={{ backgroundColor: "#c5d86e", width: "fit-content" }}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Skeleton
                variant="rounded"
                sx={{ height: "24px", width: "90px", borderRadius: "150px" }}
              />
              <Skeleton
                variant="rounded"
                sx={{ height: "24px", width: "90px", borderRadius: "150px" }}
              />
              <Skeleton
                variant="rounded"
                sx={{ height: "24px", width: "90px", borderRadius: "150px" }}
              />
            </div>
          )}
          {producto ? (
            <div className="pt-4 flex gap-3 items-center md:pt-12">
              <p className="px-5 py-1 text-3xl text-white w-fit bg-[#2b5e2c] rounded-lg font-bold sm:text-4xl">
                ${Intl.NumberFormat().format(producto.price).toString()}
              </p>
              {producto.sale && (
                <p className="px-5 py-2 text-xl text-white w-fit bg-[#2b5e2c] rounded-lg font-bold">
                  Oferta
                </p>
              )}
            </div>
          ) : (
            <Skeleton
              className="pt-4 md:pt-12"
              variant="rounded"
              sx={{
                height: "44px",
                width: "160px",
                marginBottom: "3rem",
              }}
            />
          )}
          {producto ? (
            <p className="text-gray-500 w-fit pt-8 text-xs">
              ID: {producto._id}
            </p>
          ) : (
            <Skeleton variant="rounded" sx={{ height: "16px" }} />
          )}
          <div className="pb-12">
            {producto ? (
              shareError === undefined ? (
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
              )
            ) : (
              <Skeleton variant="rounded" sx={{ height: "37px" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
