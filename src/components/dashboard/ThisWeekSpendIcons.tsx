import React from "react";
import plus from "../../assets/plus.svg";
import { categoriesData } from "../../library/data";
import { DbExpenseDataModel } from "../../types/types";

type Props = {
  expenseData: DbExpenseDataModel[];
};

const ThisWeekSpendIcons = ({ expenseData }: Props) => {
  const info =
    categoriesData && categoriesData.find((data) => expenseData[0].category === data?.category);

  let expenseBalance;
  try {
    const initialValue = 0;
    if (expenseData && expenseData.length >= 1) {
      const sumReduce = expenseData.reduce(
        (previous: any, current: any) => previous + current.price,
        initialValue
      );
      expenseBalance = sumReduce;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="relative cursor-pointer flex flex-col items-center group">
      <div
        className={`w-[32px] flex justify-center items-center ${info?.color} rounded-full h-[32px]`}
      >
        <img src={info?.icon} className="w-[16px] h-[12px]" alt="plus" />
      </div>
      <div className="relative">
        <div className="absolute w-[52px] top-[-3px] left-[-18px]  flex-col items-center hidden group-hover:flex">
          <div
            className={`w-[10px] h-[10px] relative rounded-t-[4px] right-2 top-[5px] rotate-45 ${info?.color} `}
          ></div>
          <span
            className={`relative rounded-[3px] w-[52px] justify-center flex items-center h-[18px] z-10 text-[12px] leading-[16px] text-white whitespace-no-wrap ${info?.color} shadow-lg`}
          >
            ${expenseBalance && expenseBalance}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThisWeekSpendIcons;
