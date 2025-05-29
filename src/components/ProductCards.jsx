import { useDisclosure } from "@chakra-ui/react";

import AddNow from "./Modal/AddNow";
import Image from "next/image";
const ProductCards = ({ checked }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="product_card">
      <Image src="/images/product1.jpg" width={228} height={194} alt="ticket icon" />
      <div className="product_top">
        <div className="status_td">
          <span>In Stock</span>
        </div>
        <h4>$48</h4>
      </div>
      <h4>Orange Juice</h4>
      <div className="product_bottom">
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            In Stock
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            defaultChecked={checked}
          />
        </div>

        <button type="button" className="border-0 bg-transparent" onClick={onOpen}>
          <Image src="/images/edit_icon.png" width={23} height={23} alt="ticket icon" />
        </button>
      </div>
      <AddNow isOpen={isOpen} onClose={onClose} btntitle="Update" />
    </div>
  );
};

export default ProductCards;
