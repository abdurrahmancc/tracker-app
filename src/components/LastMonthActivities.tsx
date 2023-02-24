import React from "react";
import LastMonthActivitiesTable from "./LastMonthActivitiesTable";

const LastMonthActivities = () => {
  return (
    <div>
      <div className="flex pb-6 border-b border-[#D7D7D7] justify-between items-center">
        <div>
          <h4 className="text-[#130F26] capitalize font-[500] leading-[26.95px] text-[23px]">
            Last Month Activities
          </h4>
          <p className="text-xs pt-4 leading-[14px] text-[#9B9B9B]">Monthly Activities</p>
        </div>
        <div className="text-[#452F02] font-[500] text-[16px] leading-[18px]">View All</div>
      </div>
      <div className="max-w-[1031px] mt-[29px] pb-[96px]">
        <LastMonthActivitiesTable />
      </div>
    </div>
  );
};

export default LastMonthActivities;
