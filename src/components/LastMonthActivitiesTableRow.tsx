import { Td, Tr } from "react-super-responsive-table";
import LastMonthActivitiesCategoryIcon from "./LastMonthActivitiesCategoryIcon";
import { format } from "date-fns";

const LastMonthActivitiesTableRow = ({ expenses }: any) => {
  let expenseBalance;
  try {
    const initialValue = 0;
    if (expenses && expenses.length >= 1) {
      const sumReduce = expenses.reduce(
        (previous: any, current: any) => previous + current.price,
        initialValue
      );
      expenseBalance = sumReduce;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <Tr>
      <Td className="pt-[38px]">
        <LastMonthActivitiesCategoryIcon
          category={expenses[0]?.category}
          title={expenses[0]?.name}
        />
      </Td>
      <Td className="pt-[38px] text-[#22D03E] text-[23px] leading-8">{expenses[0]?.status}</Td>
      <Td className="pt-[38px] text-[#452F02] text-[23px] leading-8">
        {format(new Date(expenses[0]?.createdAt), "P")}
      </Td>
      <Td className="pt-[38px] text-[#452F02] text-[23px] leading-8">
        ${expenseBalance && expenseBalance}
      </Td>
    </Tr>
  );
};

export default LastMonthActivitiesTableRow;
