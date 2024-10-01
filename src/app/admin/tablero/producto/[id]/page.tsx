import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="pt-[137px] px-8 sm:pt-[76px] md:px-6">
        Editar Producto: {params.id}
      </div>
    </div>
  );
};

export default page;
