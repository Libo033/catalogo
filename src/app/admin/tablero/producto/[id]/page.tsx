import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="pt-[137px] px-8 sm:pt-[76px] md:px-6">
        <div className="pt-4">
          <Link
            className="flex items-center gap-2 underline text-blue-600"
            href={"/admin/tablero"}
          >
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
