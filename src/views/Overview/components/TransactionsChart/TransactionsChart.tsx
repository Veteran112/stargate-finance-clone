import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const smlBtn =
  "outline-none px-3 py-1 bg_dark_4 text-dark text-xs rounded-sm bg-white/10 hover:opacity-70";

const data = [
  {
    name: "Mar",
    uv: 1000,
  },
  {
    name: "Apr",
    uv: 3000,
  },
  {
    name: "May",
    uv: 2280,
  },
  {
    name: "Jun",
    uv: 3890,
  },
  {
    name: "Jul",
    uv: 4390,
  },
  {
    name: "Aug",
    uv: 490,
  },
  {
    name: "Sep",
    uv: 1300,
  },
  {
    name: "Oct",
    uv: 2000,
  },
];

const TransactionsChart = () => {
  const [activeValue, setaActiveValue] = useState<any>(data[0].uv);
  const [focusBar, setFocusBar] = useState(null);

  return (
    <>
      <div className="bg-[#232323] rounded-xl overflow-x-auto w-full">
        <div className="p-5 flex justify-between">
          <div>
            <p className="text-white/60 text-sm">Transactions</p>
            <h5 className="text-[24px] text-white mt-1">${activeValue}</h5>
            <p className="text-[11px] text-white/50">Jul 12, 2022 (UTC)</p>
          </div>

          <div className="space-x-2">
            <button className={smlBtn}>D</button>
            <button className={smlBtn}>W</button>
            <button
              className={`${smlBtn} !bg-primary !text-white hover:!opacity-100`}
            >
              M
            </button>
          </div>
        </div>

        <div className="tvl_charts px-4">
          <ResponsiveContainer width={"100%"} height={250}>
            <BarChart
              width={500}
              height={300}
              data={data}
              barCategoryGap={5}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              onMouseMove={(e: any) => {
                if (e.isTooltipActive) {
                  setFocusBar(e.activeTooltipIndex);
                } else {
                  setFocusBar(null);
                }

                if (e.activePayload?.length > 0) {
                  setaActiveValue(e.activePayload[0].payload.uv);
                } else {
                  setaActiveValue(data[0].uv);
                }
              }}
              onMouseLeave={() => {
                setFocusBar(null);
              }}
            >
              <defs>
                <linearGradient id="vol24hGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={"#fff"} stopOpacity={0.2} />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="uv" radius={[4, 4, 4, 4]}>
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      focusBar === null
                        ? "#9C5DDC"
                        : focusBar === index
                        ? "#9C5DDC"
                        : "#9c5ddc38"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TransactionsChart;
