// const img1 = "/images/user1.png";

import Image from "next/image";

const OverviewCards = ({ ovimg }) => {
  return (
    <div className="OverviewCards">
      <Image width={38} height={38} src={ovimg} alt="User Avatar" />
      <p>Today Earning</p>
      <h2>$984.42</h2>
      <h5>
        +$120.5 <span>Today</span>
      </h5>
    </div>
  );
};

export default OverviewCards;
