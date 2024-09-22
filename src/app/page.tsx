import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
  return (
    <div>
      <section className="px-8 pt-8 flex flex-col justify-center items-center gap-4">
        <ProductCard
          id={"1"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1715262308/07-catalogo-gri/ounthzvrsfniejttqadi.jpg"
          }
          category={"Perfumeria"}
          description={"Perfume magico con olor"}
          price={8500}
        />
        <ProductCard
          id={"2"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
        />
      </section>
    </div>
  );
}
