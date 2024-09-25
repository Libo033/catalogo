import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
  return (
    <div className="pt-[137px] px-8 sm:pt-[76px] md:px-6">
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
        <ProductCard
          id={"1"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1715262308/07-catalogo-gri/ounthzvrsfniejttqadi.jpg"
          }
          category={"Perfumeria"}
          description={"Perfume magico con olor"}
          price={8500}
          oferta={false}
        />
        <ProductCard
          id={"2"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
          oferta={false}
        />
        <ProductCard
          id={"3"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
          oferta={false}
        />
        <ProductCard
          id={"4"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
          oferta={true}
        />
        <ProductCard
          id={"5"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1694437727/01-varios/b4zoifzipxf6rz0czh4i.jpg"
          }
          category={"Ropa interior"}
          description={"Ropa super extra suave"}
          price={9000}
          oferta={false}
        />
      </section>
    </div>
  );
}
