import { Close } from "@mui/icons-material";
import React from "react";

interface NavigationDrawerProps {
  onCloseDrawer: () => void;
  category: Array<string>;
}

const NavigationDrawer = ({
  onCloseDrawer,
  category,
}: Readonly<NavigationDrawerProps>) => {
  return (
    <div className="bg-[#79a45660] overflow-hidden py-10 px-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold underline">Categorias</p>
        <div className="pt-2 flex flex-wrap gap-3">
          {category.map((cat) => (
            <p
              className="text-lg text-white font-medium bg-[#6a9ea999] w-fit px-5 border border-[#6a9ea9] rounded-lg"
              key={cat}
            >
              {cat}
            </p>
          ))}
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <Close
          onClick={onCloseDrawer}
          sx={{
            fontSize: "42px",
            border: "2.5px solid black",
            borderRadius: "150px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default NavigationDrawer;
