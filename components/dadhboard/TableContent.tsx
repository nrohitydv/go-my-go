"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
type Vendor = {
  id: number;
  name: string;
  url: string;
  rating: number;
  ratingChange: number;
  lastAssessed: string;
  status: "Active" | "Inactive";
  categories: string[];
};

const vendors: Vendor[] = [
  {
    id: 1,
    name: "Catalog",
    url: "catalogapp.io",
    rating: 60,
    ratingChange: 5,
    lastAssessed: "22 Jan 2022",
    status: "Active",
    categories: ["Customer data", "Admin", "+4"],
  },
  {
    id: 2,
    name: "Capsule",
    url: "getcapsule.com",
    rating: 72,
    ratingChange: -4,
    lastAssessed: "20 Jan 2022",
    status: "Active",
    categories: ["Business data", "Admin", "+4"],
  },
  {
    id: 3,
    name: "Command+R",
    url: "cmdr.ai",
    rating: 78,
    ratingChange: 6,
    lastAssessed: "24 Jan 2022",
    status: "Active",
    categories: ["Customer data", "Financials"],
  },
  {
    id: 4,
    name: "Hourglass",
    url: "hourglass.app",
    rating: 38,
    ratingChange: 8,
    lastAssessed: "26 Jan 2022",
    status: "Active",
    categories: ["Database access", "Admin"],
  },
  {
    id: 5,
    name: "Layers",
    url: "getlayers.io",
    rating: 42,
    ratingChange: -1,
    lastAssessed: "18 Jan 2022",
    status: "Active",
    categories: ["Salesforce", "Admin", "+4"],
  },
  {
    id: 6,
    name: "Quotient",
    url: "quotient.co",
    rating: 66,
    ratingChange: -6,
    lastAssessed: "28 Jan 2022",
    status: "Active",
    categories: ["Business data", "Admin", "+4"],
  },
  {
    id: 7,
    name: "Sisyphus",
    url: "sisyphus.com",
    rating: 91,
    ratingChange: 2,
    lastAssessed: "16 Jan 2022",
    status: "Inactive",
    categories: ["Customer data", "Financials"],
  },
];

const VendorTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between border border-none">
        <div>
          <h5 className="text-lg text-slate-900">Vendor Movements </h5>
          <p>Keep track of vendors and their security rating. </p>
        </div>
        <div className="relative mb-3">
          <CiSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />

          <input
            type="text"
            placeholder="Search"
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-grey-300 rounded-sm pl-11 pr-4"
          />
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full border-b border-gray-200">
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Assessed
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categories
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="border-b border-gray-200">
              <td className="px-4 py-2 flex items-center">
                <input type="checkbox" className="mr-2" />
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {vendor.name}
                    </div>
                    <div className="text-sm text-gray-500">{vendor.url}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div className="h-2 w-24 bg-gray-200 rounded-full mr-2">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${vendor.rating}%` }}
                    ></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {vendor.rating}
                  </div>
                  <div
                    className={`ml-2 text-sm ${
                      vendor.ratingChange > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {vendor.ratingChange > 0
                      ? `↑ ${vendor.ratingChange}%`
                      : `↓ ${vendor.ratingChange}%`}
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {vendor.lastAssessed}
              </td>
              <td className="px-4 py-2">
                {vendor.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-1"
                  >
                    {category}
                  </span>
                ))}
              </td>
              <td className="px-4 py-2 flex justify-end space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 2a1 1 0 00-1 1v1H3a1 1 0 000 2h1v11a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 2V3h4v1H8zm-1 2v10h6V6H7z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center p-4">
        <button className="text-blue-500 hover:underline">Previous</button>
        <span className="text-sm text-gray-500">Page 1 of 10</span>
        <button className="text-blue-500 hover:underline">Next</button>
      </div>
    </div>
  );
};

export default VendorTable;
