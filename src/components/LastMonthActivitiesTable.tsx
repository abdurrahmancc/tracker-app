import { useState, useEffect } from "react";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import { DbExpenseDataModel } from "../types/types";
import axiosPrivet from "../hooks/axiosPrivet";
import LastMonthActivitiesTableRow from "./LastMonthActivitiesTableRow";
import { useAddExpenseContext } from "../hooks/useExpenseContext";

const LastMonthActivitiesTable = () => {
  const [lastMonthExpense, setLastMonthExpense] = useState<DbExpenseDataModel[] | null>(null);
  const { currentBalance } = useAddExpenseContext();
  useEffect(() => {
    try {
      (async () => {
        const { data } = await axiosPrivet.get("/expense/get-last-month-expense");
        if (data?.data) {
          setLastMonthExpense(data?.data);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [currentBalance]);

  const homeExpense = lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "home");
  const gasExpense = lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "gas");
  const securityExpense =
    lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "security");
  const videosExpense =
    lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "videos");
  const gamesExpense = lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "games");
  const papersExpense =
    lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "papers");
  const shopExpense = lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "shop");
  const travelExpense =
    lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "travel");
  const serviceExpense =
    lastMonthExpense && lastMonthExpense.filter((ex) => ex.category === "service");

  return (
    <Table>
      <Thead>
        <Tr>
          <Th
            className={
              "font-[500] max-w-[280px] min-w-[280px] col-span-1 text-[16px] text-start text-[#9B9B9B] leading-[18px]"
            }
          >
            categories Names
          </Th>
          <Th
            className={
              "font-[500] max-w-[200px] min-w-[200px] col-span-1 text-[16px] text-start text-[#9B9B9B] leading-[18px]"
            }
          >
            Transactions
          </Th>
          <Th
            className={
              "font-[500] max-w-[200px] min-w-[200px] col-span-1 text-[16px] text-start text-[#9B9B9B] leading-[18px]"
            }
          >
            Date
          </Th>
          <Th
            className={
              "font-[500] max-w-[200px] min-w-[200px] col-span-1 text-[16px] text-start text-[#9B9B9B] leading-[18px]"
            }
          >
            Amount
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {homeExpense && homeExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={homeExpense} />
        )}

        {gamesExpense && gamesExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={gamesExpense} />
        )}

        {gasExpense && gasExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={gasExpense} />
        )}

        {securityExpense && securityExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={securityExpense} />
        )}

        {videosExpense && videosExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={videosExpense} />
        )}

        {shopExpense && shopExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={shopExpense} />
        )}

        {papersExpense && papersExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={papersExpense} />
        )}

        {travelExpense && travelExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={travelExpense} />
        )}

        {serviceExpense && serviceExpense?.length >= 1 && (
          <LastMonthActivitiesTableRow expenses={serviceExpense} />
        )}
      </Tbody>
    </Table>
  );
};

export default LastMonthActivitiesTable;
