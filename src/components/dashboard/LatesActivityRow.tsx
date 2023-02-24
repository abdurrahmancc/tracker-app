import { categoriesData } from "../../library/data";
import { DbExpenseDataModel } from "../../types/types";

type Props = {
  isLast: boolean;
  expense: DbExpenseDataModel;
};

const LatesActivityRow = ({ isLast, expense }: Props) => {
  const info = categoriesData && categoriesData.find((data) => expense.category === data?.category);
  return (
    <div className={` ${isLast ? "pt-4" : "py-4 border-[#CECECE] border-b"}`}>
      <div className="pr-[82px] flex items-center justify-between">
        <div className="flex gap-[22px]">
          <div
            className={`w-[58px] flex justify-center items-center ${info?.color} rounded-full h-[58px]`}
          >
            <img src={info?.icon} alt="antivirus" />
          </div>
          <h5 className="text-[16px] pt-2 text-[#452F02] leading-[18.75px] font-[500]">
            {expense?.name}
          </h5>
        </div>
        <p className="font-[500] text-[24px] text-[#EB001B] leading-[28.13px]">${expense?.price}</p>
      </div>
    </div>
  );
};

export default LatesActivityRow;
