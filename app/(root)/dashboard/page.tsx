import AverageVendorRatingChart from "@/components/dashboard/AverageVendorRating";
import Header from "@/components/dashboard/Header";
import VendorTable from "@/components/dashboard/VendorTable";
import VendorChart from "@/components/dashboard/VendorChart";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4 pt-2 md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full max-w-6xl">
          <div className="md:col-span-2">
            <VendorChart />
          </div>
          <div className="md:col-span-3">
            <AverageVendorRatingChart />
          </div>
        </div>
        <div className="w-full max-w-6xl mt-4">
          <VendorTable />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
