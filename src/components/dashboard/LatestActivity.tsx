import cardImg from "../../assets/currentBalanceImg.png";
import walletIcon from "../../assets/wallet.svg";
import { format } from "date-fns";
import { useAddExpenseContext } from "../../hooks/useExpenseContext";
import LatesActivityRow from "./LatesActivityRow";
import { DbExpenseDataModel } from "../../types/types";

const dates: DbExpenseDataModel[] = [
  {
    _id: "1",
    category: "home",
    createdAt: `2023-02-10T22:26:28.539+00:00`,
    price: 21,
    status: "success",
    name: "home",
  },
  {
    _id: "2",
    category: "shop",
    createdAt: "2023-02-11T12:43:19.985+00:00",
    price: 21,
    status: "success",
    name: "shop",
  },
  {
    _id: "3",
    category: "service",
    createdAt: "2023-02-12T15:48:45.859+00:00",
    price: 41,
    status: "success",
    name: "service",
  },
  {
    _id: "4",
    category: "security",
    createdAt: "2023-02-23T17:29:57.057+00:00",
    price: 21,
    status: "success",
    name: "security",
  },
  {
    _id: "5",
    category: "videos",
    createdAt: "2023-02-23T17:29:57.057+00:00",
    price: 21,
    status: "success",
    name: "videos",
  },
];

const LatestActivity = () => {
  const { allExpenseData, currentBalance } = useAddExpenseContext();

  let expenseBalance;
  try {
    const initialValue = 0;
    if (allExpenseData && allExpenseData.length >= 1) {
      const sumReduce = allExpenseData.reduce(
        (previous: any, current: any) => previous + current.price,
        initialValue
      );
      expenseBalance = sumReduce;
    }
  } catch (error) {
    console.log(error);
  }

  const remainingBalance: number = expenseBalance ? currentBalance - expenseBalance : 0;

  const getTodayData =
    allExpenseData &&
    allExpenseData.filter((el) => {
      const info = format(new Date(el.createdAt), "PP");
      const today = format(new Date(), "PP");
      return info === today;
    });

  function formatDate(date: any) {
    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((component) => component.slice(-2));

    const info = [d[1], d[0], d[2]];
    return info.slice(0, 3).join("/");
  }

  const currentDate: any = new Date();
  const getYesterdayData =
    allExpenseData &&
    allExpenseData.filter((el) => {
      const info = format(new Date(el?.createdAt), "P");
      const d = info.split("/");
      const y = d[2].slice(2, 5);
      const inc = [d[0], d[1], y].join("/");
      return inc === formatDate(new Date(currentDate - 86400 * 1000));
    });

  console.log(getYesterdayData);

  return (
    <>
      {/* ============ Current Balance card start ============ */}
      <div className="relative max-w-[424px] mx-auto h-[188px]">
        <img src={cardImg} alt="card" />

        <div className="absolute top-0 w-full h-full">
          <div className="pl-10 pt-[23px]">
            <h6 className="text-[#130F26] tracking-[2px] leading-[18.75px] text-[16px] font-[500]">
              Current Balance
            </h6>
            <div className="flex mt-[33px] gap-6 items-center">
              <img src={walletIcon} className="w-[77.5px] h-[71.16px]" alt="wallet icon" />
              <div>
                <p className="text-[36px] font-[700] leading-[42.19px] text-[#130F26]">
                  ${remainingBalance}
                </p>
                <span className="text-[16px] text-[#130F26] leading-[18.75px]">Total Expense</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Current Balance card end ============ */}
      {/* ============ Latest Activity start ============ */}
      <div className="mt-[42px] ml-[14px]">
        <div className="border-b border-[#CECECE]">
          <h6 className="text-[16px] pb-4 text-[#EB001B] tracking-[2px] pl-[5px] leading-[18.75px]">
            Latest Activity
          </h6>
        </div>
        <div className="dashboard-scrollbar max-h-[800px] overflow-y-auto">
          <div className="max-w-[436px]">
            <div>
              <h6 className="text-[14px] pt-[25px] text-center leading-[16.41px]">Today</h6>
              {/* =========== Today Activity  start ========== */}
              <div className="mt-2">
                {getTodayData &&
                  getTodayData.map((expense, i) => {
                    const isLast = getTodayData.length - 1;
                    return (
                      <LatesActivityRow
                        key={expense?._id}
                        expense={expense}
                        isLast={isLast === i}
                      />
                    );
                  })}
              </div>
            </div>
            <div className={`mt-10`}>
              <h6 className="text-[14px] text-center leading-[16.41px]">Yesterday</h6>
              {/* =========== Today Activity start ========== */}
              {/* =========== Yesterday Activity start ========== */}
              <div className="mt-2">
                {getYesterdayData &&
                  getYesterdayData.map((expense, i) => {
                    const isLast = getYesterdayData.length - 1;
                    return (
                      <LatesActivityRow
                        key={expense?._id}
                        expense={expense}
                        isLast={isLast === i}
                      />
                    );
                  })}
              </div>
              {/* =========== Yesterday Activity end ========== */}
            </div>
          </div>
        </div>
      </div>
      {/* ============ Latest Activity end ============ */}
    </>
  );
};

export default LatestActivity;
