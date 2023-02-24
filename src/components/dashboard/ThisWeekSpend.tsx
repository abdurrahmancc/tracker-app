import { useEffect, useState } from "react";
import axiosPrivet from "../../hooks/axiosPrivet";
import { DbExpenseDataModel } from "../../types/types";
import ThisWeekSpendIcons from "./ThisWeekSpendIcons";
import BarCharts from "./BarChart";
import AreaCharts from "./AreaChart";
import { useAddExpenseContext } from "../../hooks/useExpenseContext";

const ThisWeekSpend = () => {
  const [lastWeekExpense, setLastWeekExpense] = useState<DbExpenseDataModel[] | null>(null);
  const { currentBalance } = useAddExpenseContext();
  useEffect(() => {
    try {
      (async () => {
        const { data } = await axiosPrivet.get("/expense/get-last-week-expense");
        if (data?.data) {
          setLastWeekExpense(data?.data);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [currentBalance]);

  let expenseBalance;
  try {
    const initialValue = 0;
    if (lastWeekExpense && lastWeekExpense.length >= 1) {
      const sumReduce = lastWeekExpense.reduce(
        (previous: any, current: any) => previous + current.price,
        initialValue
      );
      expenseBalance = sumReduce;
    }
  } catch (error) {
    console.log(error);
  }

  const homeExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "home");
  const gasExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "gas");
  const securityExpense =
    lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "security");
  const videosExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "videos");
  const gamesExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "games");
  const papersExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "papers");
  const shopExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "shop");
  const travelExpense = lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "travel");
  const serviceExpense =
    lastWeekExpense && lastWeekExpense.filter((ex) => ex.category === "service");

  return (
    <div className="max-w-[416px] min-w-[416px]">
      <div className="flex pb-4 mb-10 border-b border-[#D7D7D7] justify-between">
        <div>
          <h4 className="text-[23px] text-[#130F26] font-[500] leading-[26.95px]">
            This week spend
          </h4>
          <div className="flex gap-2 pt-4">
            {homeExpense && homeExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={homeExpense} />
            )}
            {gasExpense && gasExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={gasExpense} />
            )}
            {securityExpense && securityExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={securityExpense} />
            )}
            {videosExpense && videosExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={videosExpense} />
            )}
            {gamesExpense && gamesExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={gamesExpense} />
            )}
            {papersExpense && papersExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={papersExpense} />
            )}
            {shopExpense && shopExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={shopExpense} />
            )}
            {travelExpense && travelExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={travelExpense} />
            )}
            {serviceExpense && serviceExpense?.length >= 1 && (
              <ThisWeekSpendIcons expenseData={serviceExpense} />
            )}
          </div>
        </div>
        <div className="py-4 flex justify-center items-center flex-col px-6 rounded-[16px] bg-white">
          <p className="font-[500] text-[#000000] text-[36px] leading-[42px]">
            ${expenseBalance && expenseBalance}
          </p>
          <span className="text-[#452F02] text-[12px] leading-[14px]">Total Spend</span>
        </div>
      </div>
      <div>
        <BarCharts lastWeekExpense={lastWeekExpense} />
        <AreaCharts lastWeekExpense={lastWeekExpense} />
      </div>
    </div>
  );
};

export default ThisWeekSpend;
