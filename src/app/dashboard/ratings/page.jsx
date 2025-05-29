import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  return (
    <div className="page rating_body">
      <div className="rating_head">
        <div className="rh_rating">
          <h2>4.7</h2>
        </div>
        <div>
          <div className="rh_stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>Based on 908 reviews</p>
        </div>
      </div>
      <div className="user_rating_item">
        <div className="user_rating_item_inner">
          <div className="d-flex gap-3">
            <Image src="/images/rating_user.png" width={90} height={88} alt="ticket icon" />
            <div className="user_rating_info">
              <h3 className="pb-2">Allen Warn</h3>
              <div className="rh_stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h3>Amazing Taste</h3>
              <h4>Order ID - #12345</h4>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="user_rating_item">
        <div className="user_rating_item_inner">
          <div className="d-flex gap-3">
            <Image src="/images/rating_user.png" width={90} height={88} alt="ticket icon" />
            <div className="user_rating_info">
              <h3 className="pb-2">Allen Warn</h3>
              <div className="rh_stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h3>Amazing Taste</h3>
              <h4>Order ID - #12345</h4>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="user_rating_item">
        <div className="user_rating_item_inner">
          <div className="d-flex gap-3">
            <Image src="/images/rating_user.png" width={90} height={88} alt="ticket icon" />
            <div className="user_rating_info">
              <h3 className="pb-2">Allen Warn</h3>
              <div className="rh_stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h3>Amazing Taste</h3>
              <h4>Order ID - #12345</h4>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="user_rating_item">
        <div className="user_rating_item_inner">
          <div className="d-flex gap-3">
            <Image src="/images/rating_user.png" width={90} height={88} alt="ticket icon" />
            <div className="user_rating_info">
              <h3 className="pb-2">Allen Warn</h3>
              <div className="rh_stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h3>Amazing Taste</h3>
              <h4>Order ID - #12345</h4>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
