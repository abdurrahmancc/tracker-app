import Categories from "../../components/dashboard/Categories";
import Header from "../../components/dashboard/Header";
import LatestActivity from "../../components/dashboard/LatestActivity";
import Sidebar from "../../components/dashboard/Sidebar";
import ThisWeekSpend from "../../components/dashboard/ThisWeekSpend";
import LastMonthActivities from "../../components/LastMonthActivities";
import bg from "../../assets/bg.png";
import { useEffect } from "react";
import axiosPrivet from "../../hooks/axiosPrivet";
import { useAddExpenseContext } from "../../hooks/useExpenseContext";

const Dashboard = () => {
  const { setAllExpenseData, currentBalance } = useAddExpenseContext();

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("/expense");
      if (data.status === "success") {
        setAllExpenseData(data?.data);
      }
    })();
  }, [setAllExpenseData, currentBalance]);

  return (
    <>
      <header className="relative">
        <Header />
      </header>
      <main className="min-h-screen max-w-[1920px]">
        <div>
          <div className="flex ">
            <div className="h-full bg-[#FFFBF3] border-r border-[#CECECE] w-[121px] min-w-[121px] pt-[253px]">
              <Sidebar />
            </div>
            <div className="w-[480px] min-w-[480px] pt-[191px] bg-[#FFFBF3]">
              <LatestActivity />
            </div>
            <div className="w-full px-14">
              <div className="w-full pt-[191px] flex justify-between">
                <ThisWeekSpend />
                <Categories />
              </div>
              <div
                style={{ backgroundImage: `url(${bg})` }}
                className="mt-[65px] bg-cover bg-no-repeat"
              >
                <LastMonthActivities />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
