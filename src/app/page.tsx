import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
  return (
    <div>
      <section className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:px-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
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
        <ProductCard
          id={"3"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
        />
        <ProductCard
          id={"4"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
        />
        <ProductCard
          id={"5"}
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
