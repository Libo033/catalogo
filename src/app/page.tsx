import ProductCard from "@/components/cards/ProductCard";
import SearchBar from "@/components/other/SearchBar";

export default function Home() {
  return (
    <div className="px-8 md:px-6">
      <div className="flex gap-3 pt-6 sm:justify-between">
        <SearchBar />
      </div>
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
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
