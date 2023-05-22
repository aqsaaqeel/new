import { HiOutlineChevronDown } from "react-icons/hi";
import { PieChart } from "../graphs";
export const PieChartComp = () => {
  return (
    <div className="w-2/4 h-fit p-10 mt-10 bg-white rounded-2xl">
      <div className="flex justify-between">
        <div className="font-bold h-7 text-lg">Top Products</div>
        <div className="flex items-center">
        <div className="text-gray-400 h-4 text-xs pr-2">May - June 2021</div>
          <HiOutlineChevronDown />
        </div>
      </div>
      <div className="flex justify-around pt-5">
        <div className="w-36 h-36" id="pie-chart">
          <PieChart />
        </div>
        <div className="flex flex-col pl-5 items-start">
          <div className="p-2">
            <div className="flex items-center">
              <div className="circle w-2 h-2 bg-green-300 rounded-full pr-2"></div>{" "}
              <p className="text-sm font-bold px-2">Basic Tees</p>
            </div>
            <p className="text-xs text-gray-500">60%</p>
          </div>
          <div className="p-2">
            <div className="flex items-center">
              <div className="circle w-2 h-2 bg-yellow-300 rounded-full pr-2"></div>{" "}
              <p className="text-sm font-bold px-2">Custom Short Pants</p>
            </div>
            <p className="text-xs  text-gray-500">30%</p>
          </div>
          <div className="p-2">
            <div className="flex items-center">
              <div className="circle w-2 h-2 bg-red-300 rounded-full pr-2"></div>{" "}
              <p className="text-sm font-bold px-2">Super Hoodies</p>
            </div>
            <p className="text-xs  text-gray-500">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
