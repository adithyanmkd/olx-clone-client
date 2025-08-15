import clsx from "clsx";

// import types
import type { Product } from "../../types/index";

const ProductCard = (product: Product) => {
  return (
    <div className="flex flex-col justify-between rounded-sm border border-[#e7e6e6]">
      <img
        className="h-[160px] w-full object-cover px-2 py-2"
        src={product.image}
        alt={product.title}
      />
      <div
        className={clsx(
          "pl-[5px]",
          product.isFeaturedProduct && "bg-amber-400"
        )}
      >
        <div className="bg-white px-2 pb-2">
          <p className="text-[20px] font-semibold">
            ₹<span>{product.price}</span>
          </p>
          <p className="text-sm text-[#8d9094]">{product.title}</p>
          <div className="flex justify-between pt-3 text-xs text-[#8d9094]">
            <span>{product.location}</span>
            <span>{product.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
