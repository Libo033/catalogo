import { FormEvent } from "react";

export interface ProductCardProps {
  _id: string;
  image: string;
  category: string;
  description: string;
  price: number;
  sale: boolean;
  various: Array<string>;
}

export interface IProductosContext {
  productos: Array<ProductCardProps>;
  contextError: Error | undefined;
  load: boolean;
  handleCreateProduct: (
    Event: FormEvent,
    product: ProductCardProps
  ) => Promise<void>;
  handleEditProduct: (
    Event: FormEvent,
    product: ProductCardProps
  ) => Promise<void>;
  handleDeleteProduct: (id: string) => Promise<void>;
}

export interface ProductFormProps {
  id: string | null;
}

export interface APIResponseGetOne {
  code: number;
  producto: ProductCardProps;
}
