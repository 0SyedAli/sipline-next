import Image from "next/image";
import Link from "next/link";

const CategoryCards = ({ title }) => {
  return (
    <div className="product_card">
      <Image src="/images/product1.jpg" width={228} height={194} alt="ticket icon" />
      <div className="text-center mt-3">
        <h4 className="my-3">{title}</h4>
        <Link className="button_detele" href="/dashboard/manage-product">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default CategoryCards;
