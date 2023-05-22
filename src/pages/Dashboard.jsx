import React from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineThumbUp } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { RiCalendarEventLine } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi";
import { LineSvg } from "../assets";
import "./Dashboard.css"
import {
  LineGraphComp,
  PieChartComp,
  CardComp,
  Sidebar,
  Navbar,
} from "../components";

export const Dashboard = () => {
  const cardArray = [
    {
      id: 1,
      icon: <RiCalendarEventLine />,
      title: "Total Revenue",
      cost: "$2,129,430",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      icon: <BiBookmarks />,
      title: "Total Transactions",
      cost: "1,520",
      bgColor: "bg-yellow-100",
    },
    {
      id: 3,
      icon: <RiCalendarEventLine />,
      title: "Total Likes",
      cost: "9721",
      bgColor: "bg-red-100",
    },
    {
      id: 4,
      icon: <RiCalendarEventLine />,
      title: "Total Users",
      cost: "892",
      bgColor: "bg-purple-100",
    },
  ];
  return (
    <div className="flex h-screen flex-row bg-gray-100">
      <Sidebar />
      {/* Main content */}
      <div className="main-content flex-grow bg-gray-100">
        <div className="flex flex-col md:p-8">
          <Navbar />
          {/* Card section */}
          <div className="card-section flex flex-col md:flex-row md:justify-between md:space-y-0 md:space-x-4 md:mb-8">
            {cardArray.map((cardItem) => (
              <div
                key={cardItem.id}
                className="flex-shrink-0 w-full md:w-1/4 mb-4 md:mb-0"
              >
                <CardComp
                  icon={cardItem.icon}
                  title={cardItem.title}
                  cost={cardItem.cost}
                  bgColor={cardItem.bgColor}
                />
              </div>
            ))}
          </div>
          {/* Graph section */}
          <LineGraphComp />
          <div className="flex flex-col md:flex-row">
            <PieChartComp className="w-full md:w-1/2" />

            {/* Schedule Card */}

            <div className="bg-white rounded-lg p-10 m-4 md:m-10 flex-grow md:w-1/2">
              <div className="card-heading flex justify-between">
                <h1>Today's schedule</h1>
                <div className="flex items-center">
                  <p className="text-gray-400 text-sm pr-2">See All</p>
                  <HiOutlineChevronDown />
                </div>
              </div>
              <div className="card-content mt-4 flex-wrap">
                <div className="flex py-2">
                  <LineSvg color="#9BDD7C" />
                  <div className="flex flex-col px-5">
                    <p className="text-base text-gray-700">
                      Meeting with suppliers from Kuta Bali
                    </p>
                    <p className="text-sm text-gray-400">14.00-15.00</p>
                    <p className="text-xs text-gray-400">
                      at Sunset Road, Kuta, Bali{" "}
                    </p>
                  </div>
                </div>
                <div className="flex py-2">
                  <LineSvg color="#6972C3" />
                  <div className="flex flex-col justify-between px-5">
                    <p className="text-base text-gray-700">
                      Check operation at Giga Factory 1
                    </p>
                    <p className="text-sm text-gray-400">18.00-20.00</p>
                    <p className="text-xs text-gray-400">at Central Jakarta </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
