import { HiAdjustments } from "react-icons/hi";
import { BiCustomize } from "react-icons/bi";
import { CiExport, CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-slate-900">
          Organizational Overview
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex">
          <input type="text" className=" rounded-md py-1 px-3" />
          <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 h-5 w-5 text-gray-500" />
        </div>

        <button className="flex items-center h-10 px-6 font-semibold rounded-md border border-slate-200">
          <HiAdjustments className="mr-2 h-5 w-5" />
          Filters
        </button>

        <button className="flex items-center h-10 px-6 font-semibold rounded-md border border-slate-200">
          <BiCustomize className="mr-2 h-5 w-5" />
          Customize
        </button>

        <button className="flex items-center h-10 px-6 font-semibold rounded-md border border-slate-200">
          <CiExport className="mr-2 h-5 w-5" />
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
