export interface ProductCardProps {
  id: string;
  image: string;
  category: string;
  description: string;
  price: number;
  sale: boolean;
  various: Array<string>;
}
