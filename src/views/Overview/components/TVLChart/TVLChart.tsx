import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  {
    name: "Mar",
    uv: 100,
  },
  {
    name: "Apr",
    uv: 3000,
  },
  {
    name: "May",
    uv: 2000,
  },
  {
    name: "Jun",
    uv: 2780,
  },
  {
    name: "Jul",
    uv: 1890,
  },
  {
    name: "Jul",
    uv: 2390,
  },
  {
    name: "Aug",
    uv: 3490,
  },
];

const TVLChart = () => {
  const [activeValue, setaActiveValue] = useState<any>("---");

  return (
    <>
      <div className="bg-[#232323] rounded-xl overflow-x-auto w-full">
        <div className="p-5">
          <p className="text-white/60 text-sm">TVL</p>
          <h5 className="text-[24px] text-white mt-1">{activeValue}</h5>
          <p className="text-[11px] text-white/50">Jan 29, 2022 (UTC)</p>
        </div>

        <div className="tvl_charts px-2.5">
          <ResponsiveContainer width={"100%"} height={250}>
            <AreaChart
              width={600}
              height={300}
              data={data}
              onMouseMove={(e: any) => {
                if (e.activePayload?.length > 0) {
                  setaActiveValue(`$${e.activePayload[0].payload.uv}m`);
                } else {
                  setaActiveValue(`$${data[0].uv}m`);
                }
              }}
              margin={{
                top: 0,
                right: 15,
                left: 15,
              }}
            >
              <defs>
                <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor={"#9C5DDC"} stopOpacity={0.5} />
                  <stop offset="80%" stopColor="#FFFFFF" stopOpacity={0} />
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
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                strokeWidth={2}
                stroke={"#9C5DDC"}
                fill={"url(#tvlGradient)"}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TVLChart;
