"use client";
import { ProductCardProps } from "@/lib/interfaces";
import {
  AddCircleOutline,
  CloseRounded,
  ImageOutlined,
} from "@mui/icons-material";
import { Button, Chip, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface ProductFormProps {
  id: string | null;
}

const ProductForm = ({ id }: Readonly<ProductFormProps>) => {
  const [product, setProduct] = useState<ProductCardProps>({
    id: id || "",
    image: "",
    category: "",
    description: "",
    price: 0,
    sale: false,
    various: [],
  });

  const handleAddVarious = () => {
    let newVarious = (
      document.getElementById("variosTextfield") as HTMLInputElement
    ).value;
    if (newVarious !== "") {
      setProduct({ ...product, various: [...product.various, newVarious] });
      (document.getElementById("variosTextfield") as HTMLInputElement).value =
        "";
    }
  };

  const handleDeleteImage = () => {
    setProduct({ ...product, image: "" });
  };

  const handleCreateProduct = (Event: FormEvent) => {
    Event.preventDefault();

    console.log("Nuevo:");
    console.log(product);
  };

  const handleEditProduct = (Event: FormEvent) => {
    Event.preventDefault();

    console.log("Editado:");
    console.log(product);
  };

  return (
    <section className="pt-4 sm:flex sm:flex-col sm:items-center">
      <div>
        <p className="font-medium text-2xl sm:w-96 lg:text-3xl">
          {id ? "Editar Producto" : "Nuevo Producto"}
        </p>
      </div>
      <form
        onSubmit={
          id
            ? (Event: FormEvent) => handleEditProduct(Event)
            : (Event: FormEvent) => handleCreateProduct(Event)
        }
        className="pt-5 grid gap-4 sm:pt-7"
        action=""
      >
        {id && (
          <div>
            <TextField
              fullWidth
              value={id}
              label="ID"
              variant="outlined"
              focused
              disabled
            />
          </div>
        )}
        <div className="w-full sm:w-96">
          <TextField
            fullWidth
            label="Categoria"
            variant="outlined"
            value={product.category}
            onChange={(Event: ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...product, category: Event.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-96">
          <TextField
            fullWidth
            label="Descripcion"
            variant="outlined"
            value={product.description}
            onChange={(Event: ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...product, description: Event.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-96">
          <TextField
            fullWidth
            type="number"
            label="Precio"
            variant="outlined"
            value={product.price}
            onChange={(Event: ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...product, price: parseFloat(Event.target.value) })
            }
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={product.sale || false}
                onChange={(Event: ChangeEvent<HTMLInputElement>) =>
                  setProduct({ ...product, sale: Event.target.checked })
                }
              />
            }
            label="Oferta"
          />
        </div>
        <div className="w-full flex gap-2 sm:w-96">
          <TextField fullWidth label="Imagen" variant="outlined" />

          {/*Boton para agregar imagen desde dispositivo*/}
          <Button variant="outlined">
            <ImageOutlined />
          </Button>

          {/*Boton para agregar imagen desde URL*/}
          <Button variant="outlined">
            <AddCircleOutline />
          </Button>
        </div>
        {product.image && (
          <div className="relative w-full sm:w-96">
            <Image
              className="rounded-lg w-full"
              src={product.image}
              alt={product.description}
              width={2000}
              height={2000}
            />
            <CloseRounded
              onClick={handleDeleteImage}
              className="z-10 absolute text-4xl text-white bg-[#00000090] rounded-full top-1 right-1"
            />
          </div>
        )}
        <div className="w-full flex gap-2 sm:w-96">
          <TextField
            fullWidth
            id="variosTextfield"
            label="Varios"
            variant="outlined"
          />
          <Button onClick={() => handleAddVarious()} variant="outlined">
            <AddCircleOutline />
          </Button>
        </div>
        <div className="w-full flex gap-2 sm:w-96">
          {product.various.length > 0 &&
            product.various.map((ch, i) => (
              <Chip
                key={i + ch}
                label={ch}
                size="small"
                sx={{ backgroundColor: "#c5d86e", width: "fit-content" }}
                onDelete={() =>
                  setProduct({
                    ...product,
                    various: product.various.filter((v) => v !== ch),
                  })
                }
              />
            ))}
        </div>
        <div className="py-4 flex justify-center">
          <Button type="submit" className="w-40" variant="contained">
            {id ? "editar" : "crear"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
