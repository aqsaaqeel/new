import { AiOutlineSearch } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";

export const Navbar = () =>{
    return(
        <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">Dashboard</div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  className="py-2 px-4 rounded-3xl bg-white border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Search"
                />
                <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
              </div>
              <div className="relative">
                <div className="flex items-center rounded-full bg-gray-100 py-2 px-3">
                  <FiBell className="text-gray-400 mr-2" />
                  <div className="text-gray-400">2</div>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                <HiOutlineChevronDown className="text-gray-400 ml-2" />
              </div>
            </div>
          </div>
    )
}