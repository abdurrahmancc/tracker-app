import React from "react";
import dashboardImg from "../../assets/dashboard.svg";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <ul className="h-[585px] pl-5 flex flex-col justify-between">
      <li className="h-[99px] flex justify-between items-center">
        <div className="w-20 flex justify-center items-center rounded-full bg-[#FFC248] h-20">
          <img src={dashboardImg} className="w-6 h-6" alt="dashboard" />
        </div>
        <div className="w-[7px] bg-[#FFC248] h-full rounded-l-[4px]"></div>
      </li>
      <li className="w-20 flex justify-center items-center bg-[#452F02] rounded-full h-20">
        <BiLogOut className="w-6 text-white h-6" />
      </li>
    </ul>
  );
};

export default Sidebar;
