import { format } from "date-fns";
import {
  XAxis,
  BarChart,
  Bar,
  Cell,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ lastWeekExpense }: any) => {
  let mo: number = 0;
  let tu: number = 0;
  let we: number = 0;
  let th: number = 0;
  let fr: number = 0;
  let sa: number = 0;
  let su: number = 0;

  lastWeekExpense &&
    lastWeekExpense?.forEach((data: any) => {
      const dayName = format(new Date(data?.createdAt), "EEEEEE");

      if (dayName.includes("Mo")) {
        mo += data.price;
      } else if (dayName.includes("Tu")) {
        tu += data.price;
      } else if (dayName.includes("We")) {
        we += data.price;
      } else if (dayName.includes("Th")) {
        th += data.price;
      } else if (dayName.includes("Fr")) {
        fr += data.price;
      } else if (dayName.includes("Sa")) {
        sa += data.price;
      } else {
        su += data.price;
      }
    });

  const data = [
    {
      name: "Mo",
      uv: mo,
      amt: 70,
      color: "#FD4438",
    },
    {
      name: "Tu",
      uv: tu,
      amt: 60,
      color: "#452F02",
    },
    {
      name: "We",
      uv: we,
      amt: 50,
      color: "#4807EA",
    },
    {
      name: "Th",
      uv: th,
      amt: 40,
      color: "#FD4438",
    },
    {
      name: "Fr",
      uv: fr,
      amt: 30,
      color: "#452F02",
    },
    {
      name: "Sa",
      uv: sa,
      amt: 20,
      color: "#4807EA",
    },
    {
      name: "Su",
      uv: su,
      amt: 10,
      color: "#FD4438",
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip border-none rounded-[14px] shadow bg-white px-6 py-[14px]">
          <p className="text-primary text-sm">{`$${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={415}
          height={176}
          data={data}
          barSize={32}
          barCategoryGap={24}
          margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#333333" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#333333" }} />
          <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />
          <Bar dataKey="uv" radius={8} barSize={31}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`${entry.color}`}
                type="monotone"
                stroke={"#58AA26"}
                strokeWidth={0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
