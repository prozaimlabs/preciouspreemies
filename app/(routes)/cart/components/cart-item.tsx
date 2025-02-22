import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { Product } from "@/types";
import { X } from "lucide-react";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={product.images[0].url}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{product.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{product.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {product.size.name}
            </p>
          </div>
          <Currency value={product.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
