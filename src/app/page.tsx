import ProductCard from "@/components/cards/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="px-8 pt-8 flex flex-col justify-center items-center gap-4">
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
}
