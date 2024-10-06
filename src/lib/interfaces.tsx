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
}
