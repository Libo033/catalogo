import Link from "next/link";
import React from "react";

interface CategoryFilterProps {
  category: Array<string>;
}

const CategoryFilter = ({ category }: Readonly<CategoryFilterProps>) => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-bold underline">Categorias</p>
      <div className="pt-2 flex flex-wrap gap-3">
        {category.map((cat) => (
          <Link
            href={`/${cat}`}
            className="text-lg text-white font-medium bg-[#6a9ea999] w-fit px-5 border border-[#6a9ea9] rounded-lg"
            key={cat}
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
