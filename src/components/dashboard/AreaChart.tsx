import { format } from "date-fns";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = ({ lastWeekExpense }: any) => {
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
        <div className="custom-tooltip rounded-[14px] shadow bg-white px-6 py-[14px]">
          <p className="text-primary text-sm">{`$${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="mt-10">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={415}
          height={176}
          data={data}
          margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#58AA26" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#58AA26" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#333333" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#333333" }} />
          <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#58AA26"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
