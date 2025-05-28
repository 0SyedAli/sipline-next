import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Dashboard({children}) {
  return (
    <div className="dashboard_container">
      <SideBar />
      <div className="dashboard_panel">
        <TopBar />
        
        {children}
      </div>
    </div>
  );
}
