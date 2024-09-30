import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Image
        className="absolute w-screen h-screen lg:object-cover"
        src={
          "https://res.cloudinary.com/dsuydyqgz/image/upload/v1727722125/01-varios/evvyvzuivowmohvsl0wf.jpg"
        }
        alt="leaves"
        width={900}
        height={1600}
      />
    </div>
  );
};

export default page;
