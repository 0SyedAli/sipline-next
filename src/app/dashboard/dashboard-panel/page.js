import CardLineChart from "@/components/CardLineChart";
import CardLineChart2 from "@/components/CardLineChart2";
import OverviewCards from "@/components/OverviewCards";
import Image from "next/image";
import Link from "next/link";

const img1 = "/images/dollar-circle.png";
const img2 = "/images/chart-square.png";
const img3 = "/images/money-send.png";
const img4 = "/images/discount-circle.png";

const image1 = "/images/user1.png";
const image2 = "/images/user1.png";

const DashboardPanel = ({ activeTab }) => {
  // Sample order data
  const orders = [
    {
      id: "#4FE21",
      image: image1,
      name: "Ronald Richards",
      category: "Burger",
      amount: "+$10",
      date: "20/09/2022",
      quantity: 4,
      status: "pending",
    },
    {
      id: "#4FE22",
      image: image2,
      name: "John Doe",
      category: "Pizza",
      amount: "-$12",
      date: "21/09/2022",
      quantity: 2,
      status: "ready",
    },
    {
      id: "#4FE22",
      image: image2,
      name: "John Doe",
      category: "Pizza",
      amount: "-$12",
      date: "21/09/2022",
      quantity: 2,
      status: "rejected",
    },
    {
      id: "#4FE22",
      image: image2,
      name: "John Doe",
      category: "Pizza",
      amount: "-$12",
      date: "21/09/2022",
      quantity: 2,
      status: "picked",
    },
  ];

  // Filter orders based on the active tab
  const filteredOrders = orders.filter((order) =>
    activeTab
      ? order.status.toLowerCase().includes(activeTab.toLowerCase())
      : true
  );

  return (
    <div className="page">
      <div className="dashboard_panel_inner">
        <div className="row">
          <div className="col-md-3">
            <OverviewCards ovimg={img1} />
          </div>
          <div className="col-md-3">
            <OverviewCards ovimg={img2} />
          </div>
          <div className="col-md-3">
            <OverviewCards ovimg={img3} />
          </div>
          <div className="col-md-3">
            <OverviewCards ovimg={img4} />
          </div>
        </div>
        <div className="my-4 d-flex align-items-end">
          <CardLineChart />
          <CardLineChart2 />
        </div>
        <div className="py-4 dash_list">
          <h2 className="mb-3">New Order</h2>
          <div className="table-responsive">
            <table className="table caption-top">
              <thead>
                <tr className="borderless">
                  <th scope="col">ID</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={index}>
                    <th scope="row">{order.id}</th>
                    <td className="user_td">
                      <Image width={40} height={40} src={order.image} alt="User Avatar" />
                      {order.name}
                    </td>
                    <td>{order.category}</td>
                    <td
                      className={`dollar_td ${
                        order.amount &&
                        !isNaN(
                          parseFloat(order.amount.replace(/[^\d.-]/g, ""))
                        ) &&
                        parseFloat(order.amount.replace(/[^\d.-]/g, "")) < 0
                          ? "loss"
                          : ""
                      }`}
                    >
                      {order.amount}
                    </td>
                    <td>{order.date}</td>
                    <td>{order.quantity}</td>
                    <td className={`status_td ${order.status.toLowerCase()}`}>
                      <span>{order.status}</span>
                    </td>
                    <td>
                      <Link href="/dashboard/manage-orders">View more</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
