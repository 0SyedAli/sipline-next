import Image from "next/image";
const NewOrderProductCard = ({
  id,
  status,
  title,
  quantity,
  coupon,
  price,
}) => {
  return (
    <div className="product_card">
      <Image src="/images/product1.jpg" width={233} height={199} alt="ticket icon" />
      <div className="product_top">
        {status && (
          <div className="status_td">
            <span>{status}</span>
          </div>
        )}
        <h4>${price ? price : "48"}</h4>
      </div>
      {id && (
        <div className="new_order_id">
          <Image src="/images/receipt-2.png" width={8} height={9} alt="ticket icon" />
          <span>{id}</span>
        </div>
      )}
      <h4>{title}</h4>
      <h5 className="quanity_h5">Quantity: {quantity}</h5>
      <div className="coupon_code d-flex align-items-center justify-content-between border-top">
        <h5>Coupon Code:</h5>
        <h5>
          <span>{coupon}</span>
        </h5>
      </div>
    </div>
  );
};

export default NewOrderProductCard;
