import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { lastMonthActivitiesData } from "../library/data";
import LastMonthActivitiesCategoryIcon from "./LastMonthActivitiesCategoryIcon";
import { useAddExpenseContext } from "../hooks/useExpenseContext";

const LastMonthActivitiesTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th
            className={
              "font-[500] max-w-[380px] min-w-[380px] col-span-1 text-[16px] text-start text-[#9B9B9B] leading-[18px]"
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
        {lastMonthActivitiesData &&
          lastMonthActivitiesData.map((d) => (
            <Tr key={d?._id}>
              <Td className="pt-[38px]">
                <LastMonthActivitiesCategoryIcon category={d?.category} title={d?.title} />
              </Td>
              <Td className="pt-[38px] text-[#22D03E] text-[23px] leading-8">Successful</Td>
              <Td className="pt-[38px] text-[#452F02] text-[23px] leading-8">27 / 10 /2021</Td>
              <Td className="pt-[38px] text-[#452F02] text-[23px] leading-8">$4543</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default LastMonthActivitiesTable;
