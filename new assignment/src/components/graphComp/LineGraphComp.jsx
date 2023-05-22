import { LineGraph } from "../graphs/LineGraph";
import { HiOutlineChevronDown } from "react-icons/hi";

export const LineGraphComp = () => {
  return (
    <div className="w-auto lg:w-auto md:w-1/2 sm:w-1/4 p-10 pt-10 bg-white rounded-2xl">
      <div className="font-bold text-lg sm:text-xl">Activities</div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
        <div className="text-gray-400 text-xs pr-2 sm:pr-4 mb-2 sm:mb-0">
          May - June 2021
        </div>
        <div className="flex items-center">
          <div className="circle w-2 h-2 bg-red-300 rounded-full pr-2 sm:pr-3"></div>{" "}
          <div className="text-xs px-1 sm:px-2">Guest</div>
          <div className="circle w-2 h-2 bg-green-300 rounded-full"></div>{" "}
          <div className="text-xs px-1 sm:px-2">Users</div>
        </div>
      </div>
      <LineGraph />
    </div>
  );
};
