import { Close } from "@mui/icons-material";
import React from "react";
import PriceFilter from "../filters/PriceFilter";
import CategoryFilter from "../filters/CategoryFilter";

interface DialogFilterProps {
  onCloseDialog: () => void;
  category: Array<string>;
}

const DialogFilter = ({
  onCloseDialog,
  category,
}: Readonly<DialogFilterProps>) => {
  return (
    <div className="max-w-[510px] p-6">
      <CategoryFilter category={category} />
      <PriceFilter />
      <div className="absolute right-1 top-1">
        <Close
          onClick={onCloseDialog}
          sx={{
            fontSize: "27px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default DialogFilter;
