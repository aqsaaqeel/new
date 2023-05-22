import schedule_icon from "../../assets/schedule_icon.png";
import setting_icon from "../../assets/setting_icon.png";
import transaction_icon from "../../assets/transaction_icon.png";
import user_icon from "../../assets/user_icon.png";

export const Sidebar = () => {
  return (
    <div className="bg-black w-auto m-10 sm:p-10 sm:m-10 rounded-3xl min-w-fit">
      <div className="text-white font-bold text-4xl mb-4 hidden sm:block md:block lg:block">
        Board.
      </div>
      <ul className="text-white py-5">
        <li className="mb-4 cursor-pointer hover:text-gray-400 flex">
          <div className="flex justify-center">
            <img src={schedule_icon} className="pr-4 w-8" />
          </div>
          <p className="hidden sm:block md:block lg:block">Dashboard</p>
        </li>
        <li className="mb-4 cursor-pointer hover:text-gray-400 flex">
          <div className="block">
            <img src={setting_icon} className="pr-4 sm:w-8" />
          </div>
          <p className="hidden sm:block md:block lg:block">Projects</p>
        </li>
        <li className="mb-4 cursor-pointer hover:text-gray-400 flex">
          <div className="block">
            <img src={transaction_icon} className="pr-4 sm:w-8" />
          </div>
          <p className="hidden sm:block md:block lg:block">Team</p>
        </li>
        <li className="mb-4 cursor-pointer hover:text-gray-400 flex">
          <div className="block">
            <img src={user_icon} className="pr-4 sm:w-8" />
          </div>
          <p className="hidden sm:block md:block lg:block">Reports</p>
        </li>
      </ul>
    </div>
  );
};
